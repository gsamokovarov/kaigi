// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require reveal.js/js/reveal.js
//= require_tree .

function parseRuby() {
	document.querySelectorAll('.js-parse-ruby').forEach(pre => {
		const button = document.createElement('button')
		button.textContent = 'Parse'

		button.addEventListener('click', () => {
			const code = pre.querySelector("code").textContent
			fetch("/parsers", {
				method: "POST",
				headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
				body: JSON.stringify({code})
			}).then(response => {
				response.json().then(rubyAST => {
					const anotherCode = document.createElement('code')
					anotherCode.className = 'lisp'
					anotherCode.textContent = rubyAST.code

					const anotherPre = document.createElement('pre')
					anotherPre.className = 'parsed-code'
					anotherPre.contentEditable = true
					anotherPre.appendChild(anotherCode)
					anotherPre.style.background = '#ededed'
					anotherPre.style.padding = '.5em'

					const maybePreWithParsedCode = pre.nextSibling
					if (maybePreWithParsedCode?.classList?.contains('parsed-code')) maybePreWithParsedCode.remove()

					pre.insertAdjacentElement('afterend', anotherPre)

					hljs.highlightBlock(anotherPre)
					Reveal.layout()
				})
			})
		})

		pre.insertBefore(button, pre.firstChild)
	})
}

window.addEventListener('DOMContentLoaded', () => {
	parseRuby()
})
