class GraphsController < ApplicationController
	def index
	end

	def data
		respond_to do |format|
			format.json {
				render :json => [23, 34, 13, 45, 3]
			}
		end
	end
	
end
