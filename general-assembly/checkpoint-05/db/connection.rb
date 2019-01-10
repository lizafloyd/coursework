require 'active_record'

ActiveRecord::Base.establish_connection(
  database: 'cars',
  adapter: 'postgresql'
)

if defined? Sinatra
  after do
    ActiveRecord::Base.connection.close
  end
end
