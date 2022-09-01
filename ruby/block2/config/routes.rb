Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"
  # resources :movies
  # get "todos", to: "todos#index"
  get "movies", to: "movies#index"
  post "movies", to:"movies#post1"
  put "movies", to:"movies#putMul"
  put "movies/:id", to:"movies#edit"
  delete "movies/:id", to:"movies#del1"
  
end
