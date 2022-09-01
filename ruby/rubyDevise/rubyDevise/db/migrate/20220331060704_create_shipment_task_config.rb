class CreateShipmentTaskConfig < ActiveRecord::Migration[6.0]
  def change
    create_table :shipment_task_configs, id: :integer, default: -> { 'gen_random_integer()' } do |t|
      t.integer :process_id
      t.string :service_name
      t.string :state
      t.string :status
      t.string :task
      t.string :label
      t.string :trade_type
      t.string :task_type
      # t.json :get_apis
      # t.json :ui_config
      # t.json :conditions, default: {}
      t.string :evaluated_condition
      t.string :user_types, default: [].to_yaml, array: true
      t.string :assigned_stakeholder
      t.string :stakeholders, default: [].to_yaml, array: true
      t.string :tags, default: [].to_yaml, array: true
      t.boolean :mandatory
      t.string :mandatory_keys, default: [].to_yaml, array: true

      t.integer :only_origin_continent_ids, default: [].to_yaml, array: true
      t.integer :only_origin_country_ids, default: [].to_yaml, array: true
      t.integer :only_origin_location_ids, default: [].to_yaml, array: true
      t.integer :except_origin_continent_ids, default: [].to_yaml, array: true
      t.integer :except_origin_country_ids, default: [].to_yaml, array: true
      t.integer :except_origin_location_ids, default: [].to_yaml, array: true
      t.integer :only_destination_continent_ids, default: [].to_yaml, array: true
      t.integer :only_destination_country_ids, default: [].to_yaml, array: true
      t.integer :only_destination_location_ids, default: [].to_yaml, array: true
      t.integer :except_destination_continent_ids, default: [].to_yaml, array: true
      t.integer :except_destination_country_ids, default: [].to_yaml, array: true
      t.integer :except_destination_location_ids, default: [].to_yaml, array: true
      t.timestamps
    end
  end
end
