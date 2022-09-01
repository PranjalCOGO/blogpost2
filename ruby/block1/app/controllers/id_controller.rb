class IdController < ApplicationController

    data=
    def pp 
        l=params[:k]
    
        name=params[:name]
        data=[l,name]
        render :json => data
    end



end