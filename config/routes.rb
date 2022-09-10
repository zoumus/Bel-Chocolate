Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: :create
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show]
    resources :reviews, only: [:create, :edit, :destroy, :index, :show, :update]
    resources :categories, only: [:index] do 
      resources :products, only: [:index]
    end
    get '/products/:category_id/category', to: "products#index"
  end
  get '*path', to: "static_pages#frontend_index"
end
