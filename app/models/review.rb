# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  user_id    :bigint           not null
#  product_id :bigint           not null
#  rating     :integer          not null
#  body       :text             not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Review < ApplicationRecord
    validates :rating, :title, presence: true
    validates :rating, inclusion: { in: 1..5 }
    validates :body, length: {minimum: 4}
    # validates :user_id, uniqueness: {scope: :product_id}
      #validates a unique pairing between user_id and product_id to ensure 1 user
      #can only create a review for that product



    belongs_to :user
    belongs_to :product

    

    # def average_rating
    #     return ((self.reviews.pluck(:rating)) / (self.reviews.length));
    # end
end
