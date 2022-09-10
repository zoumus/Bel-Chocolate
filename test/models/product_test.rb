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
require "test_helper"

class ProductTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
