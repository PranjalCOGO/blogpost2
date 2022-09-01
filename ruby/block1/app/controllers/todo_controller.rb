class TodoController < ApplicationController

    def index
        data = [{ "name" => "todo"}]

        render :json => data
    end
    

end