# json.products do
#     @products.each do |product|
#         json.extract! product, :id, :title, :description, :price, :created_at, :updated_at
#         json.picture_url product.picture.url
#     end
    
# end

# json.products({})

json.products do
  @products.each do |product|
    json.set! product.id do
      json.partial! 'api/products/product', product: product
      json.num_reviews product.reviews.length
      json.avg_reviews product.average_rating
    end
  end
end