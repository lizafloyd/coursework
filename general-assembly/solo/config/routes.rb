Rails.application.routes.draw do
  # 
  # get 'comments/new'
  #
  # get 'comments/create'
  #
  # get 'comments/edit'
  #
  # get 'comments/update'
  #
  # get 'comments/destroy'

  root "posts#index"
  resources :posts do
    resources :comments
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
