# Bitcoin 10th anniversary party in TLV - provably fair raffle

On XXX, we'll take the list of users who retweeted [this tweet](YYY),
HMAC the screen names using the hash of block #ZZZ, order the hashes
lexicographically, and the lowest hash wins!

If the winner won't respond to us within NNN or is otherwise unable to take the prize,
we'll go on to the next lowest hash, until we find someone who does.

An implementation of the code used to determine the winners order
is available at `raffle.js`. It can be invoked as follow:

```bash
$ node raffle.js <blockhash> <tweetid>
```

In case the textual description of the algorithm results
in different ordering than the code, the code wins.
