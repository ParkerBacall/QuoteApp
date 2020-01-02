class QuoteTagsController < ApplicationController

    def index
        quoteTags = QuoteTag.all
        # render json: quoteTags, include: :tag :quote
    end

    def create
        quoteTag = QuoteTag.create(quote: params[:quote], tag: params[:tag])
        render json: quoteTag
    end
end
