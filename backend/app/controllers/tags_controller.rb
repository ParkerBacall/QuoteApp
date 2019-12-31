class TagsController < ApplicationController
    def index
        tags = Tag.all
        render json: tags
    end

    def show
        tag = Tag.find(params[:id])
        render json: tag, include: :quotes
    end

    def create
        tag = Tag.create(name: params[:name])
        render json: tag
    end

end
