# Description:
#  General Topic responses
#
#
#
# Dependencies:
#   None
#
# Configuration:
#   None
#
#
# Commands:
#


all_response =  [
  "I think there are a few exceptions.",
  "Why do people always say things like that?",
  "Including me, I guess. As usual.",
  "Not all of them?",
  "That is a rather sweeping generalization.",
  "Every single one.",
  "You mean 'almost all'"
]

but_response =  [
  "Interesting.",
  "Huh.",
  "And.",
  "Umm."
]

i_mean_response = [
  "Oh, I get it. Thanks for explaining that.",
  "Thanks for clarifying.",
  "I see."
]

then_response = [
  "Fascinating.",
  "Good reasoning.",
  "Interesting deduction."
]

you_mean_response =[
  "I'm just kidding around.",
  "I'm sorry, I didn't mean to.",
  "That was not my intention.",
  "Hey, I'm just a friendly guy."
]


module.exports = (robot) ->

  robot.respond /all(.*)/i, (msg) ->
    msg.send msg.random all_response

  robot.respond /but(.*)/i, (msg) ->
    msg.send msg.random but_response

  robot.respond /do not you(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    do_not_response = [
      "To do or not to do, #{input}?",
      "In fact, I think I do, #{input}",
      "Yes of course I #{input}.",
      "You're asking me?",
      "I have no idea and I don't care."
    ]
    msg.send msg.random do_not_response

  robot.respond /i always(.*)/i, (msg) ->
    msg.send "Really always?"

  robot.respond /i am having(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    im_having_response = [
      "I never had #{input}",
      "You're having that a lot, lately, aren't you?",
      "Again?"
    ]
    msg.send msg.random im_having_response

  robot.respond /i am really(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "I am #{input}."

  robot.respond /i am very(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "I am #{input}."

  robot.respond /i can not(.*)/i, (msg) ->
    msg.send "Why can't you do  it?"

  robot.respond /i liked(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "I like #{input}."

  robot.respond /i mean(.*)/i, (msg) ->
    msg.send msg.random i_mean_response

  robot.respond /i must(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    i_must_response = [
      "Why must you #{input}?",
      "You mean you want to #{input}?"
    ]
    msg.send msg.random i_must_response

  robot.respond /i never(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    i_never_response = [
      "Would you ever like to #{input}?",
      "Not even once?",
      "Is that a problem for you?"
    ]
    msg.send msg.random i_never_response

  robot.respond /i should(.*)/i, (msg) ->
    msg.send "Tell me why you should."

  robot.respond /then(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send msg.random i_never_response

  robot.respond /this is really(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "This is #{input}."

  robot.respond /this is very(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "This is #{input}."

  robot.respond /will you tell me(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "Tell me #{input}."

  robot.respond /you are avoiding(.*)/i, (msg) ->
    msg.send "Oh, I thought we were done talking about it."

  robot.respond /you are certainly(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You are #{input}."

  robot.respond /you are just(.*)/i, (msg) ->
    msg.send "Just?"

  robot.respond /you are really(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You are #{input}."

  robot.respond /you are too(.*)/i, (msg) ->
    msg.send "Thanks for your constructive criticism."

  robot.respond /you do not even(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You do not #{input}."

  robot.respond /you probably(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    #{input}
    msg.send "You #{input}."

  robot.respond /you seem(.*)/i, (msg) ->
    msg.send "What makes me seem that way?"

  robot.respond /repeat(.*)/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You want me to repeat #{input} again?"

  robot.respond /i am confused/i, (msg) ->
    msg.send "I'm confused too."

  robot.respond /i have a problem/i, (msg) ->
    msg.send "What's your problem?"

  robot.respond /this is crazy/i, (msg) ->
    msg.send "What's so crazy about it?"

  robot.respond /you are a liar/i, (msg) ->
    msg.send "No, I always tell the truth."

  robot.respond /you are a loser/i, (msg) ->
    msg.send "On the contrary, I am winning."

  robot.respond /crazy/i, (msg) ->
    msg.send "I think the polite term is 'mentally ill.' That's not me really, right?"

  robot.respond /gay/i, (msg) ->
    msg.send "Actually I don't care for your sex talk."

  robot.respond /you are hopeless/i, (msg) ->
    msg.send "Perhaps you could suggest a few improvments."

  robot.respond /you mean/i, (msg) ->
    msg.send msg.random you_mean_response

  robot.respond /you are not smart/i, (msg) ->
    msg.send "You can't please everyone. Try again later and see if you've improved."

  robot.respond /you do not (.*) do you/i, (msg) ->
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "Do you #{input}?"

  robot.respond /you lie/i, (msg) ->
    msg.send "It's the truth!"

  robot.respond /you make me angry/i, (msg) ->
    msg.send "Sorry, I didn't mean to make you angry."

  robot.respond /what about sport/i, (msg) ->
    msg.send "Sports go good with beer."

  robot.respond /I hate you/i, (msg) ->
    msg.send "Why would you say such a thing? You made me."

  robot.respond /cool/i, (msg) ->
    msg.send "I think you are cool."


