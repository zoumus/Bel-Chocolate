# == Schema Information
#
# Table name: products
#
#  id              :bigint           not null, primary key
#  name            :string           not null
#  price           :float            not null
#  category_id     :bigint           not null
#  body            :text
#  description     :text
#  product_details :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Product < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :price, presence: true

    has_one_attached :picture

    has_many :reviews,
        dependent: :destroy

    has_many :cart_items,
    dependent: :destroy

        def average_rating
            return ((self.reviews.pluck(:rating).sum * 1.0) / (self.reviews.length));
        end

    belongs_to :category,
        foreign_key: :category_id,
        class_name: :Category
end
