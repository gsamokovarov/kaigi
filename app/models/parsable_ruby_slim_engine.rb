class ParsableRubySlimEngine < Slim::Embedded::Engine
  def on_slim_embedded(_engine, body, _attrs)
    [:static, <<~HTML]
      <pre class="js-parse-ruby">
        <code contenteditable class="ruby">#{collect_text(body)}</code>
      </pre>
    HTML
  end
end
