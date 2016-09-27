class CreateCards < ActiveRecord::Migration[5.0]
  def change
    create_table :cards do |t|
      t.integer :value
      t.string :name
      t.string :suit

      t.timestamps
    end
  end
end
