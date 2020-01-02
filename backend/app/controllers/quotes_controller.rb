class QuotesController < ApplicationController
   
    def index
        quotes = Quote.all
        render json: quotes, include: :tags
    end

    def show
        quote = Quote.find(params[:id])
        render json: quote, include: :tags
    end

    def create
        @quote = Quote.new(quote_params)
        if @quote.valid?
            @quote.save
        end 
        redirect_to "http://localhost:3001/"
    end

    def destroy
        quote = Quote.find(params[:id])
        quote.destroy
    end

    def update
        quote = Quote.find(params[:id])
        quote.update(quote_params)
    end

    private

    def quote_params
        params.permit(
            :text,
            :author,
            tag_ids: []
        )
    end
end
