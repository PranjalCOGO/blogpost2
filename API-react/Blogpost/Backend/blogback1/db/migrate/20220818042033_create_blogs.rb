class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.integer :blogid
      t.integer :userid
      t.string  :title
      t.text  :content 
      t.timestamps
    end
  end
end
