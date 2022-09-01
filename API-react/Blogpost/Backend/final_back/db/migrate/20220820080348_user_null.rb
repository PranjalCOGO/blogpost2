class UserNull < ActiveRecord::Migration[7.0]
  def change
    change_column :users,:password, false
  end
end
