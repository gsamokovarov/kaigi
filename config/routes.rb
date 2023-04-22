Rails.application.routes.draw do
  root 'home#show'

  resource :parsers, only: :create
  resource :error, only: :show
end
