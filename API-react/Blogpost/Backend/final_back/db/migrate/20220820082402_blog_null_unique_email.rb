class BlogNullUniqueEmail < ActiveRecord::Migration[7.0]
  def change
    change_column :blogs, :img, false
    add_index :users ,[:email,:username,:password], unique: true
  end
end
