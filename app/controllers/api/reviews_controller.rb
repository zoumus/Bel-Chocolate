class Api::ReviewsController < ApplicationController

    before_action :require_logged_in

    def create
        @review = Review.new(review_params)
        @review.user_id = current_user.id 
        #assigning a review_id that matches the current_user

        if @review.save!
            render :show #renderjson = no formatted get apply,
            # render:show, jbuilder format gets applied because show is a jbuilder template
            #example: user_id --> userId (in our api/views)
        else
            render json: { errors: @review.errors.full_messages }, status: :unprocessable_entity
            ##when you render error, you want to render it in json
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.user_id == current_user.id && @review.update(review_params) 
            # render :index
            render :show #customize information about the particular object we're returning, allows us to extract certain info
        else
            render json: { message: "You can only edit your own reviews!"}, status: :unauthorized
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        # unless @review
        #   render json: { message: 'Unauthorized' }, status: :unauthorized
        #   return
        # end
        # @review.destroy
        # head :no_content
        if @review && @review.destroy
            render :show
        end
    end

    private
    def review_params
        params.require(:review).permit(:rating, :title, :body, :user_id, :product_id)
    end
end
