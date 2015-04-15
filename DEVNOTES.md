# Developer Notes

How to get up and running so you can contribute to Marvin.

1. Make sure you have the latest repository checked out from git:
  ```
  git clone https://github.com/emory-lits-labs/litsdev-hubot.git
  ```
2. For MAC users, install [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12) from the App Store. If you are on OSX 10.9 or older, you may need to install an older version of Xcode which can be found on Apple's [Developer Portal](https://developer.apple.com/downloads/index.action).

2. Install  [node.js](https://github.com/emory-lits-labs/litsdev-hubot.git) and [npm](https://npmjs.org/).  If you have trouble, check out [node.js and npm install instructions](http://joyent.com/blog/installing-node-and-npm) recommended in the [Hubot documentation](https://hubot.github.com/docs/).

3. Install local dependencies:
  ```
  npm install
  ```

4. Install [git flow](https://github.com/nvie/gitflow) and initialize it in your local repository, accepting defaults:
  ```
  git flow init
  ```

5. Configure marvin with local settings (lat/long coordinates for forecast, API keys, etc) - copy ``bin/.hubotrc.sample`` to ``bin/.hubotrc`` and fill in the desired values.

6. Run marvin locally:
  ```
  bin/hubot -n marvin
  ```
