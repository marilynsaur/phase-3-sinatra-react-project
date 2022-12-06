class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.integer :score
      t.string :book_review
      t.integer :book_id
      t.timestamps
      # the id column is generated automatically for every table! no need to specify it here.
    end
  end
end
