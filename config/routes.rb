Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:show, :create, :destroy]
    resources :products, only: [:index, :show]
    resources :reviews, only: [:create, :destroy, :update]
    resources :categories, only: [:index] do 
      resources :products, only: [:index]
    end
    resources :cart_items, only: [:index, :create, :update, :destroy]
    
    get '/products/:category_id/category', to: "products#index"
    get '/products/search/:query', to:"products#search"
    delete '/products/allProduct', to:"cart_items#destroy_all"
  end
  get '*path', to: "static_pages#frontend_index"
end
