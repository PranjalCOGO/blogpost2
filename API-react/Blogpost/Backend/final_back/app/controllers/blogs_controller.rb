class BlogsController < ApplicationController
    def index
        render :json => Blog.all
    end
    def post1
        title=params[:title]
        userid=params[:userid]
        content=params[:content]
        img=params[:img]
        
        if title!="" && content!="" && img!="" &&userid!="0"&&title!=nil && content!=nil && img!=nil &&userid!=nil
            Blog.create(user_id: userid,title: title,content: content,img: img  )
            # data=[n,y,m,po]
            render  :json => Blog.all
            
        else
            render :json => 0
        end

        


    end
    def edit
        id= params[:id]
        blogs= Blog.find(id)
        content= params[:content]   
        blogs.update(content: content)
        render :json => Blog.all


    end
    def del1
        
        m=params[:id]
        
        Blog.find(m).destroy
        
        # data=[n,y,m,po]
        render  :json => Blog.all


    end
    def singleblog
        m=params[:id]
        records=Blog.where(id: m)
        render  :json => records
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
        #username=params[:username]
        #id=User.where(username: username)
        #sql1= "Select userid from users where username = '"   + username +"'"
        # id = ActiveRecord::Base.connection.execute(sql1)
        user_id=params[:id]
        # l=pp.to_s
        # sql = "Select Title from blogs where userid = "+ l
        # records_array = ActiveRecord::Base.connection.execute(sql)
        title=Blog.select(:title,:content,:img,:id).where(user_id: user_id)
        render :json => title
    end
end
