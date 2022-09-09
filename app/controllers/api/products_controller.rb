class Api::ProductsController < ApplicationController
    wrap_parameters include: Product.attribute_names + [:picture], format: :multipart_form

    def index
        
        if params[:category_id]
            @products = Product.where(category_id: params[:category_id])
            render :index
        else
            @products = Product.all
            render :index
        end
    end

    def show
        @product = Product.find(params[:id])
        render :show
    end

    private
    def product_params
        params.require(:product).permit(
            :name,
            :price,
            :description,
            :category_id
        )
    end

end
