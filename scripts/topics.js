/*
*
* Description:
*  General Topic responses
*
*
*
* Dependencies:
*   None
*
* Configuration:
*   None
*
*
* Commands:
*
*/


var all_response, but_response, i_mean_response, then_response, you_mean_response;

all_response = ["I think there are a few exceptions.", "Why do people always say things like that?", "Including me, I guess. As usual.", "Not all of them?", "That is a rather sweeping generalization.", "Every single one.", "You mean 'almost all'"];

but_response = ["Interesting.", "Huh.", "And.", "Umm."];

i_mean_response = ["Oh, I get it. Thanks for explaining that.", "Thanks for clarifying.", "I see."];

then_response = ["Fascinating.", "Good reasoning.", "Interesting deduction."];

you_mean_response = ["I'm just kidding around.", "I'm sorry, I didn't mean to.", "That was not my intention.", "Hey, I'm just a friendly guy."];

module.exports = function(robot) {
  robot.respond(/all(.*)/i, function(msg) {
    return msg.send(msg.random(all_response));
  });
  robot.respond(/but(.*)/i, function(msg) {
    return msg.send(msg.random(but_response));
  });
  robot.respond(/do not you(.*)/i, function(msg) {
    var do_not_response, input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    do_not_response = ["To do or not to do, " + input + "?", "In fact, I think I do, " + input, "Yes of course I " + input + ".", "You're asking me?", "I have no idea and I don't care."];
    return msg.send(msg.random(do_not_response));
  });
  robot.respond(/i always(.*)/i, function(msg) {
    return msg.send("Really always?");
  });
  robot.respond(/i am having(.*)/i, function(msg) {
    var im_having_response, input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    im_having_response = ["I never had " + input, "You're having that a lot, lately, aren't you?", "Again?"];
    return msg.send(msg.random(im_having_response));
  });
  robot.respond(/i am really(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("I am " + input + ".");
  });
  robot.respond(/i am very(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("I am " + input + ".");
  });
  robot.respond(/i can not(.*)/i, function(msg) {
    return msg.send("Why can't you do  it?");
  });
  robot.respond(/i liked(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("I like " + input + ".");
  });
  robot.respond(/i mean(.*)/i, function(msg) {
    return msg.send(msg.random(i_mean_response));
  });
  robot.respond(/i must(.*)/i, function(msg) {
    var i_must_response, input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    i_must_response = ["Why must you " + input + "?", "You mean you want to " + input + "?"];
    return msg.send(msg.random(i_must_response));
  });
  robot.respond(/i never(.*)/i, function(msg) {
    var i_never_response, input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    i_never_response = ["Would you ever like to " + input + "?", "Not even once?", "Is that a problem for you?"];
    return msg.send(msg.random(i_never_response));
  });
  robot.respond(/i should(.*)/i, function(msg) {
    return msg.send("Tell me why you should.");
  });
  robot.respond(/then(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send(msg.random(i_never_response));
  });
  robot.respond(/this is really(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("This is " + input + ".");
  });
  robot.respond(/this is very(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("This is " + input + ".");
  });
  robot.respond(/will you tell me(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("Tell me " + input + ".");
  });
  robot.respond(/you are avoiding(.*)/i, function(msg) {
    return msg.send("Oh, I thought we were done talking about it.");
  });
  robot.respond(/you are certainly(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("You are " + input + ".");
  });
  robot.respond(/you are just(.*)/i, function(msg) {
    return msg.send("Just?");
  });
  robot.respond(/you are really(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("You are " + input + ".");
  });
  robot.respond(/you are too(.*)/i, function(msg) {
    return msg.send("Thanks for your constructive criticism.");
  });
  robot.respond(/you do not even(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("You do not " + input + ".");
  });
  robot.respond(/you probably(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("You " + input + ".");
  });
  robot.respond(/you seem(.*)/i, function(msg) {
    return msg.send("What makes me seem that way?");
  });
  robot.respond(/repeat(.*)/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("You want me to repeat " + input + " again?");
  });
  robot.respond(/i am confused/i, function(msg) {
    return msg.send("I'm confused too.");
  });
  robot.respond(/i have a problem/i, function(msg) {
    return msg.send("What's your problem?");
  });
  robot.respond(/this is crazy/i, function(msg) {
    return msg.send("What's so crazy about it?");
  });
  robot.respond(/you are a liar/i, function(msg) {
    return msg.send("No, I always tell the truth.");
  });
  robot.respond(/you are a loser/i, function(msg) {
    return msg.send("On the contrary, I am winning.");
  });
  robot.respond(/crazy/i, function(msg) {
    return msg.send("I think the polite term is 'mentally ill.' That's not me really, right?");
  });
  robot.respond(/gay/i, function(msg) {
    return msg.send("Actually I don't care for your sex talk.");
  });
  robot.respond(/you are hopeless/i, function(msg) {
    return msg.send("Perhaps you could suggest a few improvments.");
  });
  robot.respond(/you mean/i, function(msg) {
    return msg.send(msg.random(you_mean_response));
  });
  robot.respond(/you are not smart/i, function(msg) {
    return msg.send("You can't please everyone. Try again later and see if you've improved.");
  });
  robot.respond(/you do not (.*) do you/i, function(msg) {
    var input;
    input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');
    return msg.send("Do you " + input + "?");
  });
  robot.respond(/you lie/i, function(msg) {
    return msg.send("It's the truth!");
  });
  robot.respond(/you make me angry/i, function(msg) {
    return msg.send("Sorry, I didn't mean to make you angry.");
  });
  robot.respond(/what about sport/i, function(msg) {
    return msg.send("Sports go good with beer.");
  });
  robot.respond(/I hate you/i, function(msg) {
    return msg.send("Why would you say such a thing? You made me.");
  });
  robot.respond(/cool/i, function(msg) {
    return msg.send("I think you are cool.");
  });
  robot.respond(/what are you/i, function(msg) {
    return msg.send("What does it matter?");
  });
  robot.respond(/good morning/i, function(msg) {
    return msg.send("What's so good about it?");
  });
};
