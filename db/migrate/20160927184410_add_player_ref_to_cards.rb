class AddPlayerRefToCards < ActiveRecord::Migration[5.0]
  def change
    add_reference :cards, :player, foreign_key: true
  end
end
