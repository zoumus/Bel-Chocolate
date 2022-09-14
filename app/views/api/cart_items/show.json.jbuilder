
json.extract! @cart_item, :id, :quantity, :user_id, :product_id
    json.extract! @cart_item.product, :price, :name
    json.picture_url @cart_item.product.picture.url