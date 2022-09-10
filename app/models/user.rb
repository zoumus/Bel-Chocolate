# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    has_secure_password

    validates :email, 
    format: { with: URI::MailTo::EMAIL_REGEXP },
    length: {in: 3..255}, 
    uniqueness: true
    validates :first_name, :last_name, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}

    before_validation :ensure_session_token

    has_many :reviews,
        dependent: :destroy

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        
        if @user&.authenticate(password)
          return @user
        else
          return nil
        end
    end

    def reset_session_token!
        self.session_token = generate_unique_session_token
        save!
        session_token
    end

    private

    def generate_unique_session_token
        while true
          token = SecureRandom.urlsafe_base64
          return token unless User.exists?(session_token: token)
        end
    end
    
    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end
    
end
