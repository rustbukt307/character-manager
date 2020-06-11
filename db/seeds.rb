# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Campaign.destroy_all
Character.destroy_all
User.destroy_all

@user = User.create!({ username: 'testeban2020', password: '123456' })

p "#{User.count} user(s) created"

@characteronius = Character.create!(name: 'Characteronius the Mighty')

p "#{Character.count} Character(s) created"

Campaign.create!(name: 'Campaign 1', user: @user, characters: [@characteronius])

p "#{Campaign.count} campaign(s) created"
