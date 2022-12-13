class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
    
    # Add routes
    get "/books" do
      #  "hello world"
      books = Book.all
      books.to_json(include: :reviews)
    end

    get '/books/:id' do
      # look up the game in the database using its ID
      book = Book.find(params[:id])
      # send a JSON-formatted response of the game data
      book.to_json(include: :reviews)
    end




    get "/reviews" do
       "hello world"
      reviews = Review.all
      reviews.to_json

    end

    post '/reviews' do
      review = Review.create(
        score: params[:score],
        book_review: params[:book_review],
        book_id: params[:book_id]
       
      )
      review.to_json
    end

    delete '/reviews/:id' do
      review = Review.find(params[:id])
      review.destroy
      review.to_json
    end
    








    post '/books/:id' do
      book = Book.create(
        title: params[:title],
        author: params[:author],
        subject: params[:subject],
        page_count: params[:page_count],
        published: params[:published],
        image: params[:image]
        
        
      )
      book.to_json(include: :reviews)
    end
  
    patch '/books/:id' do
      book = Book.find(params[:id])
      book.update(
        image: params[:image],
        title: params[:title]
       
      )
      book.to_json
    end
    
  
    delete '/books/:id' do
      # find the review using the ID
      book = Book.find(params[:id])
      # delete the review
      book.destroy
      # send a response with the deleted review as JSON
      book.to_json(include: :reviews)
    end
  # # Add your routes here
  # get "/" do
  #   { message: "Good luck with your project!" }.to_json
  # end
 
end
