class UserNull1 < ActiveRecord::Migration[7.0]
  def change
    change_column :users,:email, false   
  end
end
