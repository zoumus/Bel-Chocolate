# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  quantity   :integer          not null
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    validates :product_id, :user_id, :quantity, presence: true
    validates :product_id, uniqueness: {scope: :user_id}
   
    belongs_to :user
    belongs_to :product

    has_one_attached :picture
end
