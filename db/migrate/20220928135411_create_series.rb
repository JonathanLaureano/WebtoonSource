class CreateSeries < ActiveRecord::Migration[6.1]
  def change
    create_table :series do |t|
      t.string :name
      t.string :author
      t.string :translator
      t.text :description
      t.string :image_url

      t.timestamps
    end
  end
end
