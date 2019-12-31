Rails.application.routes.draw do
  resources :quote_tags
  resources :tags, only: [:index, :show]
  resources :quotes, only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
