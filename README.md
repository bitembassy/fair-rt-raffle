# Bitcoin 10th anniversary party in TLV - provably fair raffle

On XXX, we'll make a snapshot of the list of screen names who retweeted [this tweet](YYY)
using the [web archive](https://web.archive.org/) (for [this url](https://twitter.com/i/activity/retweeted_popup?id=YYY)).

On block #ZZZ (around TTT), we'll HMAC each screen name using the hash of block #ZZZ as the key,
order the hashes lexicographically, and the lowest hash wins!

If the winner won't respond to us within NNN or is otherwise unable to take the prize,
we'll go on to the next lowest hash, until we find someone who does.

An implementation of the code used to determine the winners order
is available at `raffle.js`. It can be invoked as follow:

```bash
$ git clone https://gist.github.com/de2b8db6ce59fafcec7a8480a55ffaec party-raffle && cd party-raffle
$ npm install
$ node raffle.js <blockhash> <tweetid> <archive date>
```

For example:

```
$ node raffle.js 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f 1074323991261782016 20181217212353

#1  293151d35d90f17b22a4ca8aafced9cb52e29c0df1aaa27a05255d18119b48b3  _drgo
#2  4ee31014ed751741e016662ae3d467483c7209c4bc904a940c65d80231571733  LamassuBTC
#3  55e21aa9404f7f26b096bc6d5f0a961757f9caf563dda9a86d413c4641fadebc  zysman
...
```

In case the textual description of the algorithm results
in different ordering than the code, the code wins.
