# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

names = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King', 'Ace']
values = [2,3,4,5,6,7,8,9,10,11,12,13,14]
suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades']
deck = Deck.create!

names.each_with_index do |name, i|
  suits.each do |suit|
    Card.create!(name: name, value: values[i], suit: suit, deck_id: deck.id)
  end
end
