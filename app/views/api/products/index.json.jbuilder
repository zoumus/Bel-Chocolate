json.products do
    @products.each do |product|
        json.extract! product, :id, :title, :description, :price, :created_at, :updated_at
        json.picture_url product.picture.url
    end
    
end 