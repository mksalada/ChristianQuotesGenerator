var quotes = [
  '\"You will always have the potential to sin. But God has given you the power to overcome sin through His Holy Spirit. The key to drawing on His power is to be obedient to the Holy Spirit.\"\n-Greg Laurie',
  '\"It\'s easy to mistake a morally restrained heart for a spiritually changed heart.\"\n-Timothy Keller',
  '\"Not everybody can be famous but everybody can be great, because greatness is determined by service.\"\n-Martin Luther King Jr.',
  '\"It\'s better to hurt with a purpose than to exist without one.\"\n-Craig Groeschel',
  '\"Tolerance isn\'t about not having beliefs. It\'s about how your beliefs lead you to treat people who disagree with you.\"\n-Timothy Keller',
  '\"Don\'t judge each day by the harvest you reap but by the seeds that you plant.\"\n-Robert Louis Stevenson',
  '\"Nothing in life is to be feared, it is only yo be understood. Now is the time to understand more, so that we may fear less.\"\n-Marie Curie',
  '\"Don\'t believe in your heart; direct your heart to believe in God. Don\'t follow your heart; follow Jesus.\"\n-Jon Bloom',
  '\"Work hard, but depend on God\'s grace at all times.\"\n-Real Life Christian Communities',
  '\"You won\'t be here long, so don\'t get too attached.\"\n-Rick Warren',
  '\"The moment you give up, you start to look for excuses. The moment you think you can do it, you find a way.\"\n-Anonymous',
  '\"Fear-based repentance makes us hate ourselves. Joy-based repentance makes us hate the sin.\"\n-Timothy Keller',
  '\"Sin has the power of pleasure. And the Bible breaks that power with the power of a superior pleasure.\"\n-John Piper',
  '\"The Bible says that our real problem is that every one of us is building our identity on something besides Jesus.\"\n-Timothy Keller',
  '\"God is not behind what is tragic with this world, much less responsible for it. People are.\"\n-James Emery White',
  '\"When you are born again, you don\'t lose your ability to sin, what you lose is your ability to enjoy sin.\"\n-Vladimir Savchuk',
  '\"Confessing sin opens the door for deliverance. Repentance from sin closes the door to the demons.\"\n-Vladimir Savchuck'
]

function newQuote(){
  var randomNumber = Math.floor(Math.random()*quotes.length);
  document.getElementById('quotes').innerHTML = quotes[randomNumber];
}