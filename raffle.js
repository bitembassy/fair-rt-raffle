const request = require('superagent')
    , cheerio = require('cheerio')
    , {createHmac} = require('crypto')

const blockhash = Buffer.from(process.argv[2], 'hex')
    , tweetid = process.argv[3]
    , archive_time = process.argv[4]

const makeTicket = name => createHmac('sha256', blockhash).update(name).digest('hex')

request(`http://web.archive.org/web/${archive_time}if_/https://twitter.com/i/activity/retweeted_popup?id=${tweetid}`)
  .then(res =>  {
    const $ = cheerio.load(res.body.htmlUsers)

    const tickets = $('.js-stream-item .account').map((i, el) => $(el).data('screen-name')).get()
      .map(name => ({ name, hash: makeTicket(name) }))
      .sort((a, b) => a.hash < b.hash ? -1 : 1)

    console.log(tickets.map((t, i) => `#${i+1}\t${t.hash}\t${t.name}`).join('\n'))
  })
  .catch(console.error)
