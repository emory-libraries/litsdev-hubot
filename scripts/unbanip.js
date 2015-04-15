/*
*
* Description:
*   Use fail2ban to unban ip
*
* Commands:
*   hubot unban ip - unban the requested IP address
*
* Notes:
*   Requires fail2ban-client installed on the machine where hubot is running
*   Create a shell script with the following contents:
*       #!/bin/bash
*       /usr/bin/fail2ban-client set ssh-iptables unbanip $1#
*   Install the script as /usr/local/bin/hubot-unban-ip-ssh.sh
*   Give the hubot user nopasswd sudo permission to run that script:
*      (root) NOPASSWD: /usr/local/bin/hubot-unban-ip-ssh.sh
*
* Author:
*   rlskoeser
*
*/

module.exports = function(robot) {
  return robot.respond(/unban ([^ ]*)$/i, function(msg) {
    var command, ip, reply_msg;
    ip = msg.match[1];
    this.exec = require('child_process').exec;
    
    // command = "fail2ban-client set ssh-iptables unbanip #{ip}"
    command = "sudo /usr/local/bin/hubot-unban-ip-ssh.sh " + ip;
    reply_msg = "Unbanning IP " + ip + "... ";
    return this.exec(command, function(error, stdout, stderr) {
      var color, msg_attachment, msg_data, text;
      if (error) {
        text = String(error);
        color = '#FF3B25';
      }
      if (stdout) {
        text = String(stdout);
        color = '#30D066';
      }
      
      // stderr content seems to duplicate error, so ignoring for now

      
      try {
        // send a nicely formatted message slack message if we can
        msg_attachment = {
          fallback: text,
          title: text,
          color: color
        };
        msg_data = {
          channel: msg.envelope.room,
          text: reply_msg,
          attachments: [msg_attachment]
        };
        return robot.adapter.customMessage(msg_data);
      } catch (_error) {
        // if that doesn't work, use a regular text reply
        return msg.reply(reply_msg + text);
      }
    });
  });
};
