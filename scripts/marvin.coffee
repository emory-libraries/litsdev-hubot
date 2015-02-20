# Description:
#  more quotes from Marvin, the Paranoid Android
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
# Commands:
#   hubot how are you?
#
#  modeled on marvin-quotes.coffee from hubot community scripts
#  quotes from http://www.imdb.com/character/ch0007553/quotes

quotes = [
    "I think you ought to know I'm feeling very depressed.",
    "Here I am, brain the size of a planet, and they ask me to take you to the bridge. Call that job satisfaction, 'cause I don't.",
    "I have a million ideas, but, they all point to certain death.",
    "I've got this terrible pain in all the diodes down my left side.",
    "Do you want me to sit in a corner and rust or just fall apart where I'm standing?",
    "The first ten million years were the worst. And the second ten million: they were the worst, too. The third ten million I didn't enjoy at all. After that, I went into a bit of a decline.",
    "It gives me a headache just trying to think down to your level.",
    "You think you've got problems. What are you supposed to do if you are a manically depressed robot? No, don't even bother answering. I'm 50,000 times more intelligent than you and even I don't know the answer.",
    "Very badly I suspect."
]

module.exports = (robot) ->

  robot.hear /how are you\?/, (msg) ->
    msg.send msg.random quotes
