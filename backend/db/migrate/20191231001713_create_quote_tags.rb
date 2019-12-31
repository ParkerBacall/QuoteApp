class CreateQuoteTags < ActiveRecord::Migration[6.0]
  def change
    create_table :quote_tags do |t|
      t.references :quotes, null: false, foreign_key: true
      t.references :tags, null: false, foreign_key: true

      t.timestamps
    end
  end
end
