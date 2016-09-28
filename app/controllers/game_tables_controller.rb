class GameTablesController < ApplicationController
  def index
    deck = Deck.first
    cards = deck.cards.shuffle

    render locals: { cards: cards }
  end

  def show
    deck = Deck.first
    cards = Card.where(deck_id: deck.id).shuffle
    hand1 = [cards[0], cards[2]]
    hand2 = [cards[1], cards[3]]
    render locals: {
      player_hand: hand1,
      dealer_hand: hand2
    }
  end
end
