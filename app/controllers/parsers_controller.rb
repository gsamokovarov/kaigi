require 'parser/ruby32'

class ParsersController < ApplicationController
  skip_forgery_protection

  def create
    ast = Parser::Ruby32.parse params[:code]
    code = ast.inspect

    render json: { code: }
  end
end
