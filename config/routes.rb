Rails.application.routes.draw do
  resources :game_tables
  resources :players
  resources :decks
  resources :cards

  root 'dashboard#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
