---
layout: post
title:  "How to set up async/await with Babel & Webpack"
date:   2017-11-08 08:00:00 +0:00
categories: post
---

My favourite thing in JavaScript right now is `async`/`await`.

`async`/`await` is a blast to use when you have a lot of asynchronous requests to make, especially when one request relies on the result of another.

It turns this promise chain...

```
const makeRequest = () => request1().then(value1 =>
  request2(value1).then((value2) =>
    request3(value1, value2)
  )
)
```

... into this...

```
async makeRequest = () => {
  const value1 = await request1()
  const value2 = await request2(value1)
  const value3 = await request3(value1, value2)
}
```

For me, the second one is far easier to follow.

But to use `async`/`await` in the browser you need to transpile with Babel for browsers that don’t support it yet.

Sometimes it’s kind of tricky (for me, at least) to remember the steps, so here’s a rundown.

**First off**: start up a `npm` project:

```
npm init -y
```

**Then**, install all the things:

```
npm i --save-dev webpack
```

```
npm i --save-dev \
  babel-core babel-loader \
  babel-preset-env babel-polyfill \
  babel-plugin-transform-async-functions
```

**Next**, create a `.babelrc` file (fun fact: the `rc` bit stands for "run commands"):

```
{
  "plugins": ["transform-async-functions"],
  "presets": ["env"]
}
```

**Finally**, write out the `webpack.config.js` file:

```
const { resolve } = require('path')
const dir = __dirname
module.exports = {
  entry: ['babel-polyfill', resolve(dir, 'src/js/index.js')],
  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [{
          loader: 'babel-loader'
        }]  
      }
    ]
  },
  output: {
    path: dir,
    filename: 'js/script.js',
    publicPath: '/'
  }
}
```

The important thing to remember here is `babel-polyfill`. It needs to be *before* the entry file.

Excellent! We can now use `async`/`await` in our project!

```
// src/js/index.js
(async () =>
  const data = await fetch('./data/data.json')
  const anotherDataFile = await fetch('./data/more-data.json')
  console.log(data, anotherDataFile)  
})()
```
