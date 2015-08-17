/*
*
* Description:
*  Emory Directory Lookup
*
*
*
* Dependencies:
*   ldapjs
*
* Configuration:
*   ldap configuration
*
*
* Commands:
*   ldap <search term>
*
*/
var config = require('../config/local');
var ldap = require('ldapjs');

module.exports = function(robot) {
  robot.respond(/ldap(.*)/i, function(msg) {

    var client = ldap.createClient({
      url: config.ldap.url,
      bindDN: config.ldap.dn,
      bindCredentials: config.ldap.credentials,
      maxConnections:2
    });

    var input = msg.match[1];
    input = input.replace(/^\s+|\s+$/g, '');

    input = "*"+input+"*";

    var opts = {
      // filter: '((uid='+input+'))',
      filter: '(|(fullName='+input+')(uid='+input+'))',
      scope: 'sub'
    };

    //serialNumber can be used as link to more info emory.edu/<serialNumber>
    msg.send(['Searching directory based on term:',input,'\n'].join(' '));
    var d = new Date();
    var time_start = d.getTime();

    client.search("ou=People,dc=emory,dc=edu", opts, function(err, res) {
        // assert.ifError(err);
        var results = '';
        res.on('searchEntry', function(entry) {
          // console.log( entry.object.fullName);
          results = ['entry:',entry.object.fullName,'\nemail:',entry.object.mail,'\n'].join(' ');
          msg.send(results);
        });
        res.on('searchReference', function(referral) {
          // console.log('referral: ' + referral.uris.join());
          return('referral: ' + referral.uris.join());
        });
        res.on('error', function(err) {
          results = 'error: ' + err.message;
          msg.send(results);
        });
        res.on('end', function(result) {
          d = new Date();
          var time_end = d.getTime(),
              time_diff = (time_end - time_start) * 0.001;

          results = ['It took me',time_diff,'seconds to look through your entire direcotry and fetch your results.'].join(' ');
          msg.send(results);
        });
      });

  });
};
