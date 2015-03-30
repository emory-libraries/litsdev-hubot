# Description:
#   Use fail2ban to unban ip
#
# Commands:
#   hubot unban ip - unban the requested IP address
#
# Notes:
#   Requires fail2ban-client installed on the machine where hubot is running
#
# Author:
#   rlskoeser

module.exports = (robot) ->

    robot.respond /unban ([^ ]*)$/i, (msg) ->
        ip = msg.match[1]

        @exec = require('child_process').exec
        command = "fail2ban-client set ssh-iptables unbanip #{ip}"
        reply_msg = "Unbanning IP #{ip}... "
        @exec command, (error, stdout, stderr) ->
            if error
                text = String(error)
                color = '#FF3B25'
            if stdout
                text = String(stdout)
                color = '#30D066'

            # stderr content seems to duplicate error, so ignoring for now

            try
                # send a nicely formatted message slack message if we can
                msg_attachment =
                    fallback: text
                    title: text
                    color: color

                msg_data =
                    channel: msg.envelope.room
                    text: reply_msg
                    attachments: [
                        msg_attachment,
                    ]
                robot.adapter.customMessage msg_data
            catch
                # if that doesn't work, use a regular text reply
                msg.reply(reply_msg + text)



