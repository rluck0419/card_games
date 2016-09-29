class DashboardController < ApplicationController
  def index
    deck = Deck.first
    cards = deck.cards.shuffle
    render file: '../../FrontEnd/index.html', locals: { deck: deck, cards: cards }
  end
end
