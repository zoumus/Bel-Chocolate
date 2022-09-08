class Api::ProductController < ApplicationController

def index
    if(params[:category_id]) {
        @products = Product.where(category_id == params[:category_id])
        render :index
    } else {
        @products = Product.all
        render :index
    }

end

def show
    @product = Product.find_by(id: params[:id])
    render :show
end

end
