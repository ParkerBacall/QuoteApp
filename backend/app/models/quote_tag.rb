class QuoteTag < ApplicationRecord
  belongs_to :quotes
  belongs_to :tags
end
