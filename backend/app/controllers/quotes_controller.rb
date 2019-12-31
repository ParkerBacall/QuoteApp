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
        quote = Quote.create(text: params[:text], author: params[:author])
        QuoteTag.create(quote_id: quote.id, tag_id: params[:tag])
        redirect_to "http://localhost:3001/"
    end

    def destroy
        quote = Quote.find(params[:id])
        quote.destroy
    end

    def update
        quote = Quote.find(params[:id])
        quote.update(text: params[:text])
    end



end
