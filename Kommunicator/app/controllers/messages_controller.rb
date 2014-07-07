class MessagesController < ApplicationController

respond_to :json

  def create

  end

  def index

  end

  def message_params
    params.require(:message).permit(:title, :id)
  end

end
