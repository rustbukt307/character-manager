class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.references :campaign, null: false, foreign_key: true
      t.string :race
      t.string :char_class
      t.integer :level
      t.string :alignment
      t.integer :xp
      t.integer :str
      t.integer :dex
      t.integer :con
      t.integer :int
      t.integer :wis
      t.integer :cha
      t.integer :prof_bonus
      t.integer :hp
      t.integer :ac
      t.string :hit_dice
      t.string :attk_cast
      t.string :inventory
      t.string :feats

      t.timestamps
    end
  end
end
