enable :sessions

get '/' do
  # Pusher['chat_channel_1'].trigger('my-event', {:message => 'hello world'})
  erb :index
end

post '/pusher/auth' do 
  return 403 unless current_user
  response = Pusher['presence-channel_1'].authenticate(params[:socket_id], {
      user_id:  current_user.id,
      user_info:  {
      # user_info: {} # optional
        name: current_user.name
      }
    })

    content_type :json
    response.to_json
end

get '/game' do
  erb :chat
end
