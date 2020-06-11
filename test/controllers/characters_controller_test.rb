require 'test_helper'

class CharactersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @character = characters(:one)
  end

  test "should get index" do
    get characters_url, as: :json
    assert_response :success
  end

  test "should create character" do
    assert_difference('Character.count') do
      post characters_url, params: { character: { ac: @character.ac, alignment: @character.alignment, campaign_id: @character.campaign_id, cha: @character.cha, char_class: @character.char_class, con: @character.con, dex: @character.dex, feats: @character.feats, hit_dice: @character.hit_dice, hp: @character.hp, int: @character.int, inventory: @character.inventory, level: @character.level, name: @character.name, prof_bonus: @character.prof_bonus, race: @character.race, str: @character.str, user_id: @character.user_id, wis: @character.wis, xp: @character.xp } }, as: :json
    end

    assert_response 201
  end

  test "should show character" do
    get character_url(@character), as: :json
    assert_response :success
  end

  test "should update character" do
    patch character_url(@character), params: { character: { ac: @character.ac, alignment: @character.alignment, campaign_id: @character.campaign_id, cha: @character.cha, char_class: @character.char_class, con: @character.con, dex: @character.dex, feats: @character.feats, hit_dice: @character.hit_dice, hp: @character.hp, int: @character.int, inventory: @character.inventory, level: @character.level, name: @character.name, prof_bonus: @character.prof_bonus, race: @character.race, str: @character.str, user_id: @character.user_id, wis: @character.wis, xp: @character.xp } }, as: :json
    assert_response 200
  end

  test "should destroy character" do
    assert_difference('Character.count', -1) do
      delete character_url(@character), as: :json
    end

    assert_response 204
  end
end
