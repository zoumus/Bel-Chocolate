class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false, index: {unique: true}
      t.float :price, null: false
      t.references :category, null: false, foreign_key: {to_table: :categories}
      t.text :body
      t.text :description
      t.text :product_details
      t.timestamps
    end
  end
end
