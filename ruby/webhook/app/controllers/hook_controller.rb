class HookController < ApplicationController
    

    def web
        vi="sagar"
        mode=params[:"hub.mode"]
        token=params[:"hub.verify_token"]
        challenge= params[:"hub.challenge"]

        if mode&&token
            if mode=='subscribe' and token == vi
                puts "verified"
                render :json => challenge
            else 
                render :status => 403
            
            end
        end
    end
    def post1

        text=params[:entry].first
        id=text.dig(:messaging,0,:sender,:id)
        mess=text.dig(:messaging,0,:message,:text)
        puts mess
        if id != "17841411621503347"
            puts "YESYES"
            jj(id,mess)
        end
    end
    def jj(id,mess)
        uri = URI.parse('https://graph.facebook.com/v14.0/101403909375757/messages')
        http = Net::HTTP.new(uri.host, uri.port)
        http.use_ssl = true

        # Set HTTP content type
        request = Net::HTTP::Post.new(uri.path, {'Content-Type' => 'application/json'})
        acet="EAAGLq4G30R4BAFSLCfLJ0Luj91R3C26khpMDu1mUBD81SEvO8xUNRUMurTb2fWOpV905ydWZCtlxZAZCZBVVpZAydWnK6TAGkzWTQuhduCZBKxf8XlHlPCBFGIMdvHs6ZBRt5srHbMfWA0aFM9ZC0lavq2Xpjmk53V26WFnEHHlP19N1UouzKrU1oRj8baw5cjLD7bYjHwCrLIgopy5nVXHy"
        message1=message_quick_reply
        if mess=="Shop"
            message1=message_t
        end
        data = { access_token:acet ,message: message1,recipient: {id:id}}
        request.body = data.to_json
        response = http.request(request)

        # Get response only if it is successful 
        response.code == "200" ? response.body : ""
        puts response.body
        render :json=> response.body
    end


    def message_t
        {
            "attachment":{
              "type":"template",
              "payload":{
                "template_type":"generic",
                "elements":[
                   {
                    "title":"COGOPORT",
                    "image_url":"https://www.exchange4media.com/news-photo/1503918566_51i3Be_70244.jpg",
                    "subtitle":"We have Storage for everyone.",
                    "default_action": {
                      "type": "web_url",
                      "url": "www.cogoport.com",
                    },
                    "buttons":[
                      {
                        "type":"web_url",
                        "url":"www.cogoport.com",
                        "title":"View Website"
                      },{
                        "type":"postback",
                        "title":"Want to Ship",
                        "payload":"DEVELOPER_DEFINED_PAYLOAD"
                      }              
                    ]      
                  }
                ]
              }
            }
        }

   
    end
    def message_quick_reply
        {
            "text": "Select one",
            "quick_replies":[
              {
                "content_type":"text",
                "title":"Shop",
                "payload":"<POSTBACK_PAYLOAD_1>"
              },
              {
                "content_type":"text",
                "title":"loop",
                "payload":"<POSTBACK_PAYLOAD_2>"
              }
            ]
          }
    end
    
    

end