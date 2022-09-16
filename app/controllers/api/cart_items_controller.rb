class Api::CartItemsController < ApplicationController

    wrap_parameters include: CartItem.attribute_names + ['userId, productId']

    before_action :require_logged_in

    def index 
        @cart_items = current_user.cart_items
    end

    def create 
        @cart_item = CartItem.new(cart_params)
        @cart_item.user_id = current_user.id
        if @cart_item.save!
            render :show
        else
            render json: {errors: ['Unable to add to cart.']}, status: 422;
        end
    end 


    def update 
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.update(cart_params)
            render :show
        else 
            render json: {errors: ['Unable to update cart.']}, status: 422;
        end
    end 

    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item.destroy
            render json: {message: 'Successfully removed from cart.'}
        end 
    end 

    def destroy_all 
        @cart_items = CartItem.all
        if @cart_items
            @cart_item.destroy
        end
    end

    private 

    def cart_params 
        params.require(:cart_item).permit(:product_id, :quantity, :user_id)
    end
end
