Rails.configuration.to_prepare do
  Slim::Embedded.register :ruby, ParsableRubySlimEngine
end
