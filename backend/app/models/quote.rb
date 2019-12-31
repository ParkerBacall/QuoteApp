class Quote < ApplicationRecord
    has_many :quote_tags
    has_many :tags, through: :quote_tags
end
