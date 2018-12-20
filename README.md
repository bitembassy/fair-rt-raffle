# Bitcoin 10th anniversary party in TLV - provably fair raffle

To select a winner, on December 24th at 10AM UTC, we'll take a snapshot of the list of screen names who retweeted [this tweet](YYY) using the [web archive](https://web.archive.org/) (for [this url](https://twitter.com/i/activity/retweeted_popup?id=YYY)).

On block #555256, we'll HMAC-SHA256 each handle using the hash of the block as the key, order the hashes lexicographically, and - the lowest hash wins a flight ticket to TLV and back from anywhere in the world!

If the winner won't respond to us within 2 days or is otherwise unable to claim the prize, we'll go on to the next lowest hash, until we find someone who does.

Find everything about the party on [meetup.com](https://www.meetup.com/bitcoin-il/events/256908356/) or [Facebook](https://www.facebook.com/events/1994274880660738/). The winner will be announced on [Twitter](https://twitter.com/BitcoinIL).


An implementation of the code used to determine the winners order
is available at `raffle.js`. It can be invoked as follows:

```bash
$ git clone https://github.com/bitembassy/fair-rt-raffle && cd fair-rt-raffle
$ npm install
$ node raffle.js <blockhash> <tweetid> <archive time>
```

For example:

```
$ node raffle.js 000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f 1074323991261782016 20181217212353

#1  293151d35d90f17b22a4ca8aafced9cb52e29c0df1aaa27a05255d18119b48b3  _drgo
#2  4ee31014ed751741e016662ae3d467483c7209c4bc904a940c65d80231571733  LamassuBTC
#3  55e21aa9404f7f26b096bc6d5f0a961757f9caf563dda9a86d413c4641fadebc  zysman
...
```

* The list of screen names will be determined by the web archive, even if different than what shows up on twitter.
* In case the textual description of the algorithm results in different ordering than the code, the code wins.
* If block #555256 is somehow mined before the snapshot, we will use block #555400 instead.
