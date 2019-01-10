class CommentsController < ApplicationController
  def new
    @post = Post.find(params[:post_id])
    @comment = Comment.new
  end

  def create
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create!(strong_params)
    redirect_to post_path(@post)
  end

  def edit
    @comment = Comment.find(params[:id])
  end

  def update
    @post = Post.find(params[:post_id])
    @comment = @post.comments.create!(strong_params)
    redirect_to posts_path
  end

  def destroy
  end

  private
  def strong_params
    params.require(:comment).permit(:email, :text)
  end
end
