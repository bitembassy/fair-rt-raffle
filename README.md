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
$ node raffle.js <blockhash> <tweetid> <archive date>

# for example:
$ node raffle.js 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f 1074323991261782016 20181217212353
```

In case the textual description of the algorithm results
in different ordering than the code, the code wins.
