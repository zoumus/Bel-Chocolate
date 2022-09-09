class Api::CategoriesController < ApplicationController
    wrap_parameters include: Product.attribute_names + [:picture], format: :multipart_form

    def index
        @categories = Category.all
        render :index
    end

    def category_params
        params.require(:category).permit(:name)
    end
end
