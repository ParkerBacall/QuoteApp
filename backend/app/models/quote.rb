class Quote < ApplicationRecord
    has_many :quote_tags, dependent: :destroy
    has_many :tags, through: :quote_tags

    def tag_ids=(ids)
        ids.each do |id|
            tag = Tag.find(id)
            self.tags << tag
        end
    end

end
