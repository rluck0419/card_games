class CreateGameTables < ActiveRecord::Migration[5.0]
  def change
    create_table :game_tables do |t|
      t.string :name

      t.timestamps
    end
  end
end
