class BlogNull1 < ActiveRecord::Migration[7.0]
  def change
    change_column :blogs, :title, false
    change_column :blogs, :content, false
    #change_column :blogs, :img, false
  end
end
