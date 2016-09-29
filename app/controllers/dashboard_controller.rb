class DashboardController < ApplicationController
  def index
    deck = Deck.first
    cards = deck.cards.shuffle
    # render file: '../../FrontEnd/index.html', locals: { deck: deck, cards: cards }
    render json: {deck: deck.to_json, cards: cards.to_json}, status: 200
  end
end
