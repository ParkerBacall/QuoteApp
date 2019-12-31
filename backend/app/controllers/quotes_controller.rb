class QuotesController < ApplicationController
   
    def index
        quotes = Quote.all
        render json: quotes, include: :tags
    end

    def show
        quote = Quote.find(params[:id])
        render json: quote, include: :tags
    end


end
