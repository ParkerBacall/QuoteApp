# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

QuoteTag.destroy_all
Quote.destroy_all
Tag.destroy_all


cs1 = Quote.create(text: "Computer Science is no more about computers than astronomy is about telescopes.",
author: "Edsger W. Dijkstra")

cs2 = Quote.create(text: "Simplicity is prerequisite for reliability.",
"author": "Edsger W. Dijkstra")

cs3 = Quote.create(text: "The computing scientist’s main challenge is not to get confused by the complexities of his own making.",
"author": "Edsger W. Dijkstra")

cs4 = Quote.create(text:"If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
"author": "Edsger W. Dijkstra")


inspirational = Tag.create(name: "Inspirational")
ear = Tag.create(name: "Ear")
courage = Tag.create(name: "Courage")
programming = Tag.create(name: "Programming")

QuoteTag.create(quote: cs1, tag: programming)
QuoteTag.create(quote: cs1, tag: courage)

QuoteTag.create(quote: cs2, tag: ear)
QuoteTag.create(quote: cs2, tag: courage)

QuoteTag.create(quote: cs3, tag: programming)
QuoteTag.create(quote: cs3, tag: inspirational)
QuoteTag.create(quote: cs3, tag: courage)

QuoteTag.create(quote: cs4, tag: ear)





