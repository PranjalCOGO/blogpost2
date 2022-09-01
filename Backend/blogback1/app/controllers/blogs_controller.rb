class BlogsController < ApplicationController
    def index
        render :json => Blog.all
    end
    def post1
        title=params[:title]
        userid=params[:userid]
        blogid=params[:blogid]
        content=params[:content]
        
        blogs= Blog.new(blogid: blogid,userid: userid,title: title,content: content  )
        blogs.save
        # data=[n,y,m,po]
        render  :json => Blog.all


    end
    def edit
        title= params[:title]
        blogs= Blog.find(title)
        content= params[:content]
        Blog.update(content: content)
        render :json => Blog.all


    end
    def del1
        
        m=params[:title]
        
        
        Blog.find(m).destroy
        
        # data=[n,y,m,po]
        render  :json => Blog.all


    end
    def search
        
        m=params[:title]
        
        
        sql = "Select * from blogs where title like '%"+ m + "%'"
        records_array = ActiveRecord::Base.connection.execute(sql)

        
        # data=[n,y,m,po]
        render  :json => records_array


    end
    def userblogs
        username=params[:username]

        sql1= "Select userid from users where username = '"   + username +"'"
        id = ActiveRecord::Base.connection.execute(sql1)
        pp=((id[0]).values[0])
        l=pp.to_s
        sql = "Select Title from blogs where userid = "+ l
        records_array = ActiveRecord::Base.connection.execute(sql)
        render :json => records_array
    end
end
