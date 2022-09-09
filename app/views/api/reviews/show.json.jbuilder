json.user do
    json.extract! @review, :id, :rating, :body, :title, :user_id, :product_id, :created_at, :updated_at
end  