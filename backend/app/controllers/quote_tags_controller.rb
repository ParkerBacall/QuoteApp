class QuoteTagsController < ApplicationController
    def create
        quoteTag = QuoteTag.create(quote: params[:quote], tag: params[:tag])
        render json: quoteTag
    end
end
