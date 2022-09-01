class MoviesController < ApplicationController
    def index
        movies = Movie.all
        render :json => movies
    end
    def post1
        n=params[:name]
        y=params[:year]
        m=params[:movieid]
        po=params[:plot]
        
        movie= Movie.new(movieid: m,name: n,year: y,plot: po  )
        movie.save
        # data=[n,y,m,po]
        render  :json => Movie.all


    end
    def putMul
        n=params[:name]
        y=params[:year]
        m=params[:movieid]
        po=params[:plot]
        
        movie= Movie.new(movieid: m,name: n,year: y,plot: po  )
        movie.save


    end
    def edit
        n= params[:id]
        movie= Movie.find(n)
        m= params[:name]
        Movie.update(name: m)
        render :json => Movie.all


    end
    def del1
        
        m=params[:id]
        
        
        Movie.find(m).destroy
        
        # data=[n,y,m,po]
        render  :json => Movie.all


    end

end
