class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :subject
      t.integer :page_count
      t.integer :published
      t.string :image
      # the id column is generated automatically for every table! no need to specify it here.
    end
  end
end
