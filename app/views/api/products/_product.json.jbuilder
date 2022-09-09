json.extract! product, 
  :id, 
  :name,
  :price, 
  :description,
  :category_id,
  :created_at,
  :updated_at

  json.picture_url product.picture.url