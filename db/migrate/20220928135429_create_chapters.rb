class CreateChapters < ActiveRecord::Migration[6.1]
  def change
    create_table :chapters do |t|
      t.integer :number
      t.text :content
      t.belongs_to :series, null: false, foreign_key: true

      t.timestamps
    end
  end
end
