json.user do
    json.extract! @user, :id, :email, :first_name, :last_name
end 
json.cart_item do 
    @user.cart_items.each do |item|
        json.set! item.id do
            json.extract! item, :id, :quantity, :product_id, :user_id
        end
    end
end 