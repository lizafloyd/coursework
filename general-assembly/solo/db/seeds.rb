# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
Comment.destroy_all

test = Post.create(title: "Test", text:"test text", topic: "Test Topic", photo_url: "https://static1.squarespace.com/static/5525bbf5e4b026f75314c09b/t/5535055ee4b0f20e2b62ace7/1429538153345/blog.jpg?format=1500w")
testComment = Comment.create(email: "test@test.com", text: "Text", post: test)
