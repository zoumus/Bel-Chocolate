@cart_items.each do |item|
json.set! item.id do
    json.extract! item, :id, :quantity, :user_id, :product_id
    json.extract! item.product, :price, :name
    json.picture_url item.product.picture.url
end

end
