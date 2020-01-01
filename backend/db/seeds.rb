require 'rest-client'

QuoteTag.destroy_all
Quote.destroy_all
Tag.destroy_all

# response = RestClient.get("https://quote-garden.herokuapp.com/quotes/all")
# result = JSON.parse(response)

# result["results"].map {|quote| 
#     Quote.create(text: quote["quoteText"], author: quote["quoteAuthor"])
# }

tagCategories = ["Age", "Alone", "Amazing", "Anger", "Anniversary", "Architecture", "Art Favorite", "Attitude", "Beauty", "Best", 
    "Birthday", "Brainy", "Business", "Car", "Chance", "Change", "Christmas", "Communication", "Computers", "Cool", "Courage", 
    "Dad", "Dating", "Death", "Design", "Diet", "Dreams", "Easter", "Education", "Environmental", "Equality", "Experience", 
    "Failure", "Faith", "Family", "Famous", "Fear", "Finance", "Fitness", "Food", "Forgiveness", "Freedom", 
    "Friendship", "Funny", "Future", "Gardening", "Good", "Government", "Graduation", "Great", "Happiness", "Health", "History", 
    "Home", "Hope", "Humor", "Imagination", "Independence", "Inspirational", "Intelligence", "Jealousy", "Knowledge", "Leadership", 
    "Learning", "Legal", "Life", "Love", "Marriage", "Medical", "Men", "Mom", "Money", "Morning", "Motivational", "Movies", "Music", 
    "Nature", "Parenting", "Patience", "Patriotism", "Peace", "Pet", "Poetry", "Politics", "Positive", "Power", "Relationship", 
    "Religion", "Respect", "Sad", "Science", "Smile", "Society", "Space", "Sports", "Strength", "Success", "Sympathy", "Teacher", 
    "Technology", "Thankful", "Thanksgiving", "Time", "Travel", "Trust", "Truth", "War", "Wedding", "Wisdom", "Women", "Work"]

# tagCategories = ["Age", "Alone", "Amazing", "Anger"]

tagCategories.map{|tag| 
    Tag.create(name: tag)
}

inspirational = Tag.create(name: "Inspirational")
ear = Tag.create(name: "Ear")
courage = Tag.create(name: "Courage")
programming = Tag.create(name: "Programming")

ear.quotes.create(text: "And for the few that only lend their ear, that few is all the world.", author: "Samuel Daniel")
ear2 = Quote.create(text: "The ear of the leader must ring with the voices of the people.", author: "Woodrow Wilson")
ear3 = Quote.create(text: "It’s hard to look up to a leader who keeps his ear to the ground", author: "James H. Boren")

# kwest1 = Quote.create(text: "For me giving up is way harder than trying", author: "Kayne West")
# kwest2 = Quote.create(text: "I care. I care about everything. Sometimes not giving a f#%k is caring the most.", author: "Kayne West")

# bb1 = Quote.create(text: "If that’s true, if you don’t know who I am, then maybe your best course… would be to tread lightly.", author: "Walter White")
# bb2 = Quote.create(text: "I am not in danger, Skyler. I AM the danger!", author: "Walter White")
# bb3 = Quote.create(text: "Just because you shot Jesse James doesn't mean you are Jesse James.", author: "Walter White")

cs1 = Quote.create(text: "Computer Science is no more about computers than astronomy is about telescopes.", author: "Edsger W. Dijkstra")
cs2 = Quote.create(text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra")
cs3 = Quote.create(text: "The computing scientist’s main challenge is not to get confused by the complexities of his own making.", author: "Edsger W. Dijkstra")
cs4 = Quote.create(text:"If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger W. Dijkstra")

# cs5 = Quote.create(text: "A program is like a poem: you cannot write a poem without writing it. Yet people talk about programming as if it were a production process and measure „programmer productivity“ in terms of „number of lines of code produced“. In so doing they book that number on the wrong side of the ledger: We should always refer to „the number of lines of code spent", author: "Edsger W. Dijkstra")
# cs6 = Quote.create(text: "The tools we use have a profound and devious influence on our thinking habits, and therefore on our thinking abilities.", author: "Edsger W. Dijkstra")
# cs7 = Quote.create(text: "Adding manpower to a late software project makes it later", author: "Fred Brooks")
# cs8 = Quote.create(text: "Nine women can't make a baby in one month.", author: "Fred Brooks")
# cs9 = Quote.create(text: "When in doubt, use brute force", author: "Ken Thompson")
# cs10 = Quote.create(text: "How do we convince people that in programming simplicity and clarity — in short: what mathematicians call \"elegance\" — are not a dispensable luxury, but a crucial matter that decides between success and failure?", author: "Edsger W. Dijkstra")
# cs11 = Quote.create(text: "The first false assumption that underlies the scheduling of systems programming is that all will go well, i.e., that each task will hike only as long as it \"ought\" to take. A large programming effort, however, consists of many tasks, some chained end-to-end. The probability that each will go well becomes vanishingly small.", author: "Fred Brooks")
# cs12 = Quote.create(text: "The programmer, like the poet, works only slightly removed from pure thought-stuff. He builds his castles in the air, from air, creating by exertion of the imagination. Few media of creation are so flexible, so easy to polish and rework, so readily capable of realizing grand conceptual structures.", author: "Fred Brooks")
# cs13 = Quote.create(text: "Having a system architect is the most important single step toward conceptual integrity. After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect.", author: "Fred Brooks")
# cs14 = Quote.create(text: "If each part of the task must be separately coordinated with each other part, the effort increases as n(n-1)/2. Three workers require three times as much pairwise intercommunication as two; four require six times as much as two.", author: "Fred Brooks")
# cs15 = Quote.create(text: "When a task cannot be partitioned because of sequential constraints, the application of more effort has no effect on the schedule. The bearing of a child takes nine months, no matter how many women are assigned.", author: "Fred Brooks")
# cs16 = Quote.create(text: "Deleted code is debugged code.", author: "Jeff Sickel")
# cs17 = Quote.create(text: "Sometimes there is a silver bullet for boosting software engineering productivity. But you need to shoot the right person.", author: "Michael Stal")
# cs18 = Quote.create(text: "The best minds of my generation are thinking about how to make people click ads.", author: "Jeff Hammerbacher")
# cs19 = Quote.create(text: "There are two ways of constructing a software design: One way is to make it so simple that there are obviously no deficiencies, and the other way is to make it so complicated that there are no obvious deficiencies. The first method is far more difficult.", author: "Tony Hoare")
# cs20 = Quote.create(text: "Debugging time increases as a square of the program’s size.", author: "Chris Wenham")
# cs21 = Quote.create(text: "Controlling complexity is the essence of computer programming.", author: "Brian Kernighan")
# cs22 = Quote.create(text: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.", author: "Brian Kernighan")
# cs23 = Quote.create(text: "Walking on water and developing software from a specification are easy if both are frozen.", author: "Edward V. Berard")
# cs24 = Quote.create(text: "Beauty is more important in computing than anywhere else in technology because software is so complicated. Beauty is the ultimate defense against complexity.", author: "David Gelernter")
# cs25 = Quote.create(text: "Cleaning code does NOT take time. NOT cleaning code does take time.", author: "Robert C. Martin")
# cs26 = Quote.create(text: "I have yet to see any problem, however complicated, which when looked at in the right way, did not become more complicated.", author: "Poul Anderson")
# cs27 = Quote.create(text: "A program that produces incorrect results twice as fast is infinitely slower.", author: "John Ousterhout")
# cs28 = Quote.create(text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", author: "Rick Osborne")
# cs29 = Quote.create(text: "What one programmer can do in one month, two programmers can do in two months.", author: "Fred Brooks")
# cs30 = Quote.create(text: "One accurate measurement is worth more than a thousand expert opinions", author: "Grace Hopper")
# cs31 = Quote.create(text: "One of my most productive days was throwing away 1,000 lines of code.", author: "Ken Thompson")
# cs32 = Quote.create(text: "We should forget about small efficiencies, say about 97% of the time: premature optimization is the root of all evil. Yet we should not pass up our opportunities in that critical 3%", author: "Donald Knuth")

# ron1 = Quote.create(text: "Never half-ass two things. Whole-ass one thing.", author: "Ron Swanson")
# ron2 = Quote.create(text: "Crying: acceptable at funerals and the Grand Canyon.", author: "Ron Swanson")
# ron3 = Quote.create(text: "I believe luck is a concept invented by the weak to explain their failures.", author: "Ron Swanson")
# ron4 = Quote.create(text: "Tom put all my records into this rectangle!", author: "Ron Swanson")
# ron5 = Quote.create(text: "I love nothing.", author: "Ron Swanson")
# ron6 = Quote.create(text: "I've cried twice in my life. Once when I was seven and hit by a school bus. And then again when I heard that Li'l Sebastian has passed.", author: "Ron Swanson")
# ron6 = Quote.create(text: "Honor: if you need it defined, you don't have it.", author: "Ron Swanson")
# ron7 = Quote.create(text: "Friends: one to three is sufficient.", author: "Ron Swanson")
# ron8 = Quote.create(text: "Shorts over six inches are capri pants, shorts under six inches are European.", author: "Ron Swanson")

# ron1 = Quote.create(text: "", author: "")
# ron2 = Quote.create(text: "", author: "")
# ron3 = Quote.create(text: "", author: "")
# ron4 = Quote.create(text: "", author: "")


# inspirational = Tag.create(name: "Inspirational")
# ear = Tag.create(name: "Ear")
# courage = Tag.create(name: "Courage")
# programming = Tag.create(name: "Programming")

QuoteTag.create(quote: cs1, tag: programming)
QuoteTag.create(quote: cs1, tag: courage)

QuoteTag.create(quote: cs2, tag: ear)
QuoteTag.create(quote: cs2, tag: courage)

QuoteTag.create(quote: cs3, tag: programming)
QuoteTag.create(quote: cs3, tag: inspirational)
QuoteTag.create(quote: cs3, tag: courage)

QuoteTag.create(quote: cs4, tag: ear)





