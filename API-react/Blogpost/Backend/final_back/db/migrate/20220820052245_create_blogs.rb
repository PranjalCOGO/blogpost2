class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.integer :user_id
      t.string :title
      t.string :content
      t.text :img
      t.timestamps
    end
  end
end
