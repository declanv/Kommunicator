Rails.application.routes.draw do

  resources :messages, :comments, except: [:new, :edit]

end
