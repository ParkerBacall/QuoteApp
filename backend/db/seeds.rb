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


Quote.create(text: "Computer Science is no more about computers than astronomy is about telescopes.",
author: "Edsger W. Dijkstra")

Quote.create(text: "Simplicity is prerequisite for reliability.",
"author": "Edsger W. Dijkstra")

Quote.create(text: "The computing scientist’s main challenge is not to get confused by the complexities of his own making.",
"author": "Edsger W. Dijkstra")

Quote.create(text:"If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
"author": "Edsger W. Dijkstra")


Tag.create(name: "Inspirational")
Tag.create(name: "Ear")
Tag.create(name: "Courage")
Tag.create(name: "Programming")



