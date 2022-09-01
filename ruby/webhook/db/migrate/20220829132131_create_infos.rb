class CreateInfos < ActiveRecord::Migration[7.0]
  def change
    create_table :infos do |t|
      t.json :mess
      t.timestamps
    end
  end
end
