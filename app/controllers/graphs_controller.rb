class GraphsController < ApplicationController
	def index
	end

	def data
		respond_to do |format|
			
			myArray = (0..5).collect{ 1 + rand(10) }
			dataset = myArray.to_a

			format.json {
				render :json => dataset
			}
		end
	end

end
