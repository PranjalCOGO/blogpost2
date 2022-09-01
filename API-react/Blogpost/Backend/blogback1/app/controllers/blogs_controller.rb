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
        
        m=params[:title].downcase
        
        
        # sql = "Select * from blogs where title like '%"+ m + "%'"
        # records_array = ActiveRecord::Base.connection.execute(sql)
        records_array=Blog.all.where("lower(title) LIKE :search", search: "%#{m}%" )

        
        # data=[n,y,m,po]
        render  :json => records_array


    end
    def userblogs
        username=params[:username]
        id=User.where(username: username)
        #sql1= "Select userid from users where username = '"   + username +"'"
        # id = ActiveRecord::Base.connection.execute(sql1)
        userid=(id[0]).userid
        # l=pp.to_s
        # sql = "Select Title from blogs where userid = "+ l
        # records_array = ActiveRecord::Base.connection.execute(sql)
        title=Blog.select(:title, :content).where(userid: userid)
        render :json => title
    end
end
