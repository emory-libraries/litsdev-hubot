# Developer Notes

How to get up and running so you can contribute to Marvin.

1. Make sure you have the latest repository checked out from git:
```
git clone https://github.com/emory-lits-labs/litsdev-hubot.git
```

2. Install  [node.js](https://github.com/emory-lits-labs/litsdev-hubot.git) and [npm](https://npmjs.org/).  If you have trouble, check out [node.js and npm install instructions](http://joyent.com/blog/installing-node-and-npm) recommended in the [Hubot documentation](https://hubot.github.com/docs/).

3. Install local dependencies:
```
npm install
```

4. Install [git flow](https://github.com/nvie/gitflow) and initialize it in your local repository, accepting defaults:
```
git flow init
```

5. Run marvin locally:
```
bin/hubot -n marvin
```