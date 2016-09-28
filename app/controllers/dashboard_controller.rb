class DashboardController < ApplicationController
  def index
    deck = Deck.first
    cards = deck.cards.shuffle
    render locals: { deck: deck, cards: cards }
  end
end
