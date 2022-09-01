# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_03_31_060704) do
  create_table "shipment_task_configs", default: -> { "gen_random_integer()" }, force: :cascade do |t|
    t.integer "process_id"
    t.string "service_name"
    t.string "state"
    t.string "status"
    t.string "task"
    t.string "label"
    t.string "trade_type"
    t.string "task_type"
    t.string "evaluated_condition"
    t.string "user_types", default: "--- []\n"
    t.string "assigned_stakeholder"
    t.string "stakeholders", default: "--- []\n"
    t.string "tags", default: "--- []\n"
    t.boolean "mandatory"
    t.string "mandatory_keys", default: "--- []\n"
    t.integer "only_origin_continent_ids"
    t.integer "only_origin_country_ids"
    t.integer "only_origin_location_ids"
    t.integer "except_origin_continent_ids"
    t.integer "except_origin_country_ids"
    t.integer "except_origin_location_ids"
    t.integer "only_destination_continent_ids"
    t.integer "only_destination_country_ids"
    t.integer "only_destination_location_ids"
    t.integer "except_destination_continent_ids"
    t.integer "except_destination_country_ids"
    t.integer "except_destination_location_ids"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
