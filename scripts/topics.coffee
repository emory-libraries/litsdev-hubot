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
  "Hey, I'm just a friendly girl."
]


module.exports = (robot) ->
  
  robot.hear /all(.*)/i, (msg) ->
    msg.send msg.random all_response

  robot.hear /but(.*)/i, (msg) -> 
    msg.send msg.random but_response

  robot.hear /do not you(.*)/i, (msg) -> 
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

  robot.hear /i always(.*)/i, (msg) ->  
    msg.send "Really always?"

  robot.hear /i am having(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    im_having_response = [
      "I never had #{input}",
      "You're having that a lot, lately, aren't you?",
      "Again?"
    ]
    msg.send msg.random im_having_response

  robot.hear /i am really(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "I am #{input}."

  robot.hear /i am very(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "I am #{input}."

  robot.hear /i can not(.*)/i, (msg) -> 
    msg.send "Why can't you do  it?"

  robot.hear /i liked(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "I like #{input}."

  robot.hear /i mean(.*)/i, (msg) -> 
    msg.send msg.random i_mean_response
    
  robot.hear /i must(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    i_must_response = [
      "Why must you #{input}?",
      "You mean you want to #{input}?"
    ]
    msg.send msg.random i_must_response
    
  robot.hear /i never(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    i_never_response = [
      "Would you ever like to #{input}?",
      "Not even once?",
      "Is that a problem for you?"
    ]
    msg.send msg.random i_never_response
    
  robot.hear /i should(.*)/i, (msg) -> 
    msg.send "Tell me why you should."

  robot.hear /then(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send msg.random i_never_response
    
  robot.hear /this is really(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "This is #{input}."

  robot.hear /this is very(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "This is #{input}."

  robot.hear /will you tell me(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "Tell me #{input}."

  robot.hear /you are avoiding(.*)/i, (msg) -> 
    msg.send "Oh, I thought we were done talking about it."

  robot.hear /you are certainly(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You are #{input}."

  robot.hear /you are just(.*)/i, (msg) -> 
    msg.send "Just?"

  robot.hear /you are really(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You are #{input}."

  robot.hear /you are too(.*)/i, (msg) -> 
    msg.send "Thanks for your constructive criticism."

  robot.hear /you do not even(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You do not #{input}."

  robot.hear /you probably(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    #{input}
    msg.send "You #{input}."

  robot.hear /you seem(.*)/i, (msg) -> 
    msg.send "What makes me seem that way?"

  robot.hear /repeat(.*)/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "You want me to repeat #{input} again?"

  robot.hear /i am confused/i, (msg) -> 
    msg.send "I'm confused too."
    
  robot.hear /i have a problem/i, (msg) -> 
    msg.send "What's your problem?"
    
  robot.hear /this is crazy/i, (msg) -> 
    msg.send "What's so crazy about it?"
    
  robot.hear /you are a liar/i, (msg) -> 
    msg.send "No, I always tell the truth."
    
  robot.hear /you are a loser/i, (msg) -> 
    msg.send "On the contrary, I am winning."

  robot.hear /crazy/i, (msg) -> 
    msg.send "I think the polite term is 'mentally ill.' That's not me really, right?"
    
  robot.hear /gay/i, (msg) -> 
    msg.send "Actually I don't care for your sex talk."
    
  robot.hear /you are hopeless/i, (msg) -> 
    msg.send "Perhaps you could suggest a few improvments."

  robot.hear /you mean/i, (msg) -> 
    msg.send msg.random you_mean_response

  robot.hear /you are not smart/i, (msg) -> 
    msg.send "You can't please everyone. Try again later and see if you've improved."

  robot.hear /you do not (.*) do you/i, (msg) -> 
    input = msg.match[1]
    input = input.replace(/^\s+|\s+$/g, '')
    msg.send "Do you #{input}?"

  robot.hear /you lie/i, (msg) -> 
    msg.send "It's the truth!"
    
  robot.hear /you make me angry/i, (msg) -> 
    msg.send "Sorry, I didn't mean to make you angry."
    
  robot.hear /what about sport/i, (msg) -> 
    msg.send "Sports go good with beer."
    
  robot.hear /I hate you/i, (msg) -> 
    msg.send "Why would you say such a thing? You made me."
    
  robot.hear /cool/i, (msg) -> 
    msg.send "I think you are cool."
    
    
