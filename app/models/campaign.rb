class Campaign < ApplicationRecord
  belongs_to :user
  has_many :characters, dependent: :destroy
end
