Rails.application.routes.draw do
  resources :quote_tags, only: [:index, :create]
  resources :tags, only: [:index, :show, :create]
  resources :quotes, only: [:index, :show, :create, :destroy, :update]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
