class Api::CategoriesController < ApplicationController
    wrap_parameters include: Product.attribute_names + [:picture], format: :multipart_form

    def index
        @category
    end

    def category_params
        params.require(:category).permit(:name)
    end
end
