class DropValuesFromCard < ActiveRecord::Migration[5.0]
  def change
    remove_column :cards, :value
  end
end
