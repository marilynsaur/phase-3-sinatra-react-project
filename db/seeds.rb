puts "🌱 Seeding spices..."

# Seed your database here

storyteller = Book.create({title:"the storyteller",author:"dave grohl", subject:"rock music",page_count:"384",published:"2021",image:"https://m.media-amazon.com/images/I/411HQ41zYDL._SX329_BO1,204,203,200_.jpg"})
magical = Book.create({title:"The Year of Magical Thinking",author:"Joan Didion", subject:"nonFiction",page_count:"250",published:"2005",image:"http://prodimage.images-bn.com/pimages/9781400078431_p0_v5_s1200x630.jpg"})
catcher = Book.create({title:"The Catcher in the Rye",author:"J.D. Salinger", subject:"Fiction",page_count:"234",published:"1951",image:"https://upload.wikimedia.org/wikipedia/commons/8/89/The_Catcher_in_the_Rye_%281951%2C_first_edition_cover%29.jpg"})
dune = Book.create({title:"dune",author:"frank herbert", subject:"science fiction",page_count:"500",published:"1973",image:"https://m.media-amazon.com/images/I/41rgl-8wDsL._AC_SY780_.jpg"})
time = Book.create({title:"A Brief History of Time",author:"Stephen Hawking", subject:"nonFiction",page_count:"500",published:"1973",image:"https://m.media-amazon.com/images/I/71HADMSE3JL._AC_SY780_.gif"})
murder = Book.create({title:"Murder on the Orient Express",author:"Agatha Christie", subject:"Mystery",page_count:"500",published:"1934",image:"https://upload.wikimedia.org/wikipedia/en/c/c0/Murder_on_the_Orient_Express_First_Edition_Cover_1934.jpg"})


Review.create({score: "10", book_review:"Candid, humble and full of stories about big-time stars…music lovers will want to put this one in heavy rotation.",book_id:storyteller.id})
Review.create({score: "7", book_review:"I cant think of a book we need more than hers. . . . I cant imagine dying without this book.",book_id:magical.id})
Review.create({score: "8", book_review:"In Mr. Salinger we have a fresh voice. One can actually hear it speaking, and what is has to say is uncannily true, perceptive, and compassionate.",book_id:catcher.id})
Review.create({score: "10", book_review:"An astonishing science fiction phenomenon.",book_id:dune.id})
Review.create({score: "7", book_review:"This book marries a childs wonder to a genius intellect. We journey into Hawkings universe while marvelling at his mind.",book_id:time.id})
Review.create({score: "8", book_review:"A good story.",book_id:murder.id})
Review.create({score: "8", book_review:"A brilliantly ingenious story.",book_id:murder.id})
puts "✅ Done seeding!"


