require 'parser/current'

class ParsersController < ApplicationController
  skip_forgery_protection

  def create
    ast = Parser::CurrentRuby.parse params[:code]
    code = ast.inspect

    render json: { code: }
  end
end
