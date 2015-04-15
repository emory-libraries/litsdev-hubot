/*
*
* Description:
*   Example scripts for you to examine and try out.
*
* Notes:
*   They are commented out by default, because most of them are pretty silly and
*   wouldn't be useful and amusing enough for day to day huboting.
*   Uncomment the ones you want to try and experiment with.
*
*   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md
*
*/

// 
// module.exports = function(robot) {
//   var annoyIntervalId, answer, enterReplies, leaveReplies, lulz;
//   robot.hear(/badger/i, function(msg) {
//     return msg.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
//   });
//   robot.respond(/open the (.*) doors/i, function(msg) {
//     var doorType;
//     doorType = msg.match[1];
//     if (doorType === "pod bay") {
//       return msg.reply("I'm afraid I can't let you do that.");
//     } else {
//       return msg.reply("Opening " + doorType + " doors");
//     }
//   });
//   robot.hear(/I like pie/i, function(msg) {
//     return msg.emote("makes a freshly baked pie");
//   });
//   lulz = ['lol', 'rofl', 'lmao'];
//   robot.respond(/lulz/i, function(msg) {
//     return msg.send(msg.random(lulz));
//   });
//   robot.topic(function(msg) {
//     return msg.send(msg.message.text + "? That's a Paddlin'");
//   });
//   enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you'];
//   leaveReplies = ['Are you still there?', 'Target lost', 'Searching'];
//   robot.enter(function(msg) {
//     return msg.send(msg.random(enterReplies));
//   });
//   robot.leave(function(msg) {
//     return msg.send(msg.random(leaveReplies));
//   });
//   answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING;
//   robot.respond(/what is the answer to the ultimate question of life/, function(msg) {
//     if (answer == null) {
//       msg.send("Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again");
//       return;
//     }
//     return msg.send(answer + ", but what is the question?");
//   });
//   robot.respond(/you are a little slow/, function(msg) {
//     return setTimeout(function() {
//       return msg.send("Who you calling 'slow'?");
//     }, 60 * 1000);
//   });
//   annoyIntervalId = null;
//   robot.respond(/annoy me/, function(msg) {
//     if (annoyIntervalId) {
//       msg.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
//       return;
//     }
//     msg.send("Hey, want to hear the most annoying sound in the world?");
//     return annoyIntervalId = setInterval(function() {
//       return msg.send("AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH");
//     }, 1000);
//   });
//   robot.respond(/unannoy me/, function(msg) {
//     if (annoyIntervalId) {
//       msg.send("GUYS, GUYS, GUYS!");
//       clearInterval(annoyIntervalId);
//       return annoyIntervalId = null;
//     } else {
//       return msg.send("Not annoying you right now, am I?");
//     }
//   });
//   robot.router.post('/hubot/chatsecrets/:room', function(req, res) {
//     var data, room, secret;
//     room = req.params.room;
//     data = JSON.parse(req.body.payload);
//     secret = data.secret;
//     robot.messageRoom(room, "I have a secret: " + secret);
//     return res.send('OK');
//   });
//   robot.error(function(err, msg) {
//     robot.logger.error("DOES NOT COMPUTE");
//     if (msg != null) {
//       return msg.reply("DOES NOT COMPUTE");
//     }
//   });
//   robot.respond(/have a soda/i, function(msg) {
//     var sodasHad;
//     
//     // get number respond to number
//     sodasHad = robot.brain.get('totalSodas') * 1 || 0;
//     if (sodasHad > 4) {
//       return msg.reply("I'm too fizzy..");
//     } else {
//       msg.reply('Sure!');
//       return robot.brain.set('totalSodas', sodasHad + 1);
//     }
//   });
//   return robot.respond(/sleep it off/i, function(msg) {
//     robot.brain.set('totalSodas', 0);
//     return robot.respond('zzzzz');
//   });
// };
