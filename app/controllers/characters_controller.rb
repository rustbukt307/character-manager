class CharactersController < ApplicationController
  before_action :set_character, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  before_action :set_campaign, only: [:index, :create]

  # GET /characters
  def index
    render json: @campaign.characters
  end

  # GET /characters/1
  def show
    render json: @character
  end

  # POST /characters
  def create
    @character = Character.new(character_params)
    @character.user = @current_user
    @character.campaign = @campaign

    if @character.save
      render json: @character, status: :created
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /characters/1
  def update
    if @character.update(character_params)
      render json: @character
    else
      render json: @character.errors, status: :unprocessable_entity
    end
  end

  # DELETE /characters/1
  def destroy
    @character.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_character
      @character = Character.find(params[:id])
    end

    def set_campaign
      @campaign = Campaign.find(params[:campaign_id])
    end

    # Only allow a trusted parameter "white list" through.
    def character_params
      params.require(:character).permit(:name, :campaign_id, :race, :char_class, :level, :alignment, :xp, :str, :dex, :con, :int, :wis, :cha, :prof_bonus, :hp, :ac, :hit_dice, :inventory, :feats)
    end
end
