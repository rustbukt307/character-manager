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

@user = User.create!({ 
  username: 'testeban2020',
  password: '123456'
  })

p "#{User.count} user(s) created"

@campaign1 = Campaign.create!(
  name: 'Campaign 1',
  user: @user
)

p "#{Campaign.count} campaign(s) created"

@characteronius = Character.create!(
  name: 'Characteronius the Mighty',
  user: @user,
  campaign: @campaign1,
  race: 'Half-Orc',
  char_class: 'Barbarian',
  level: 1,
  alignment: 'Chaotic Good',
  xp: 1,
  str: 16,
  dex: 8,
  con: 13,
  int: 12,
  wis: 14,
  cha: 7,
  prof_bonus: 2,
  hp: 13,
  ac: 20,
  hit_dice: '1d12',
  inventory: 'Great sword',
  feats: 'Rage, Unarmored Defense'
)

p "#{Character.count} Character(s) created"
