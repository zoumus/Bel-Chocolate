class Api::ReviewsController < ApplicationController

    def create
        @review = Review.new(review_params)

        if @review.save!
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.user_id == current_user.id && @review.update(review_params) 
            # render :index
            render :show
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        unless @review
          render json: { message: 'Unauthorized' }, status: :unauthorized
          return
        end
        @review.destroy
        head :no_content
    end

    private
    def review_params
        params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
    end
end
