
json.extract! @review, :id, :rating, :body, :title, :user_id, :product_id, :created_at, :updated_at
 
json.user_name  @review.user.first_name #+ " " + @review.user.last_name