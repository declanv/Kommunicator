class CommentsController < ApplicationController

respond_to :json

  def index

  end

  def create

  end

  private

  def comment_params
    params.require(:comment).permit(:content, :id, :message_id)
  end

end
