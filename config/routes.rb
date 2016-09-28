Rails.application.routes.draw do
  resources :game_tables
  resources :players
  resources :decks
  resources :cards

  root 'game_tables#index', as: 'root'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
