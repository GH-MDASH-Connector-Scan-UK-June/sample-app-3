require 'sinatra'

get '/search' do
  query = params[:q]
  # Command injection
  result = `grep #{query} /var/log/app.log`
  result
end

get '/eval' do
  code = params[:code]
  # Code injection
  eval(code)
end
