require 'rest-client'

QuoteTag.destroy_all
Quote.destroy_all
Tag.destroy_all

response = RestClient.get("https://quote-garden.herokuapp.com/quotes/all")
result = JSON.parse(response)


i = 0

while i < 10 do
    Quote.create(text: result["results"][i]["quoteText"], author: result["results"][i]["quoteAuthor"])
    i+=1
end

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

tagCategories.map{|tag| 
    Tag.create(name: tag)
}

# inspirational = Tag.create(name: "Inspirational")
# ear = Tag.create(name: "Ear")
# courage = Tag.create(name: "Courage")
# programming = Tag.create(name: "Programming")

# ear.quotes.create(text: "And for the few that only lend their ear, that few is all the world.", author: "Samuel Daniel")
# ear2 = Quote.create(text: "The ear of the leader must ring with the voices of the people.", author: "Woodrow Wilson")
# ear3 = Quote.create(text: "It’s hard to look up to a leader who keeps his ear to the ground", author: "James H. Boren")

# cs1 = Quote.create(text: "Computer Science is no more about computers than astronomy is about telescopes.", author: "Edsger W. Dijkstra")
# cs2 = Quote.create(text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra")
# cs3 = Quote.create(text: "The computing scientist’s main challenge is not to get confused by the complexities of his own making.", author: "Edsger W. Dijkstra")
# cs4 = Quote.create(text:"If debugging is the process of removing software bugs, then programming must be the process of putting them in.", author: "Edsger W. Dijkstra")


# QuoteTag.create(quote: cs1, tag: programming)
# QuoteTag.create(quote: cs1, tag: courage)

# QuoteTag.create(quote: cs2, tag: ear)
# QuoteTag.create(quote: cs2, tag: courage)

# QuoteTag.create(quote: cs3, tag: programming)
# QuoteTag.create(quote: cs3, tag: inspirational)
# QuoteTag.create(quote: cs3, tag: courage)

# QuoteTag.create(quote: cs4, tag: ear)




