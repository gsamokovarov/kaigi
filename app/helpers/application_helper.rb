module ApplicationHelper
  def copyright(name, link)
    tag.div(class: :copyright) do
      tag.a name, href: link, target: "_blank"
    end
  end

  def next
    tag.a '>', href: "#", class: "navigate-next"
  end
end
