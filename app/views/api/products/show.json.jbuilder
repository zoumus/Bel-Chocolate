json.product do
    json.partial! '/api/products/product', product: @product
end

json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do 
            json.extract! review, :id, :title, :body, :rating, :user_id, :product_id, :created_at, :updated_at
            json.user_name  review.user.first_name + " " + review.user.last_name
        end
    end
end