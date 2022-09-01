Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get "webhook" ,to: "hook#web"
  post "webhook",to: "hook#post1"
  get "pp",to:"hook#pp"
  get "jj",to:"hook#jj"
end
