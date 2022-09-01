Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "home" ,to: "blogs#index"
  #edit 
  put "blog/:id" ,to: "blogs#edit"

  #add
  post "blog" ,to: "blogs#post1"

  #dele
  delete "blog/:id", to: "blogs#del1"

  #get single blog
  get "blogs/:id", to:"blogs#singleblog"

  #for search
  get "search", to: "blogs#search"

  #for the user blog list
  get "user/:id", to: "blogs#userblogs"

  #for the signup to the page
  post "signup", to: "users#adduser"

  #to show user
  get "user", to:"users#show"

  #for the signin authentication
  post "signin", to:"users#auth"

  #to delete the user
  delete "user/:id", to:"users#del1"
end
