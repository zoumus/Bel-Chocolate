class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, presence: true

    has_one_attached :picture

    has_many :reviews,
        dependent: :destroy

    # belongs_to :category,
    #     foreign_key: :category_id,
    #     class_name: :Category
end
