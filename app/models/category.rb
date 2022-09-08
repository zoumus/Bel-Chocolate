class Category < ApplicationRecord
    validates :name, presence: true

    has_many :products,
        foreign_key: :category_id,
        class_name: :Product
end
