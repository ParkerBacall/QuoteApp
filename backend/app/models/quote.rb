class Quote < ApplicationRecord
    has_many :quote_tags, dependent: :destroy
    has_many :tags, through: :quote_tags
end
