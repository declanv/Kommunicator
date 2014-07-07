class MessagesController < ApplicationController

  respond_to :json

  def create

    message = Message.create(message_params)
    respond_with message

  end

  def index

    messages = Message.all
    respond_with messages

  end

  def message_params
    params.require(:message).permit(:title, :id)
  end

end
