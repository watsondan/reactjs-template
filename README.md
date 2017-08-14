# reactjs-template

###### 1. Clone git repo to dir:
```
git clone https://github.com/watsondan/reactjs-template.git
```

###### 2. Navigate into directory:
```
cd reactjs-template
```

###### 3. Initialize with node:
```
npm init
```

###### 4. Install required moduals:
```
npm install --save-dev react react-dom webpack babel-loader babel-core babel-preset-es2015 babel-preset-react webpack-dev-server
```

###### 5. Make source and distrobution directories:
```
mkdir src dist
```

###### 6. Make app.js and index.html files:
```
touch src/app.js dist/index.html
```
```
<!--index.html-->
<body>
  <div id='app'></div>
  <script src="bundle.js"></script>
</body>
```
```
// app.js

import React from 'react'
import ReactDOM from 'react-dom'

class Main extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
      </div>
    )
  }
}

const app = document.getElementById('app')
ReactDOM.render(<Main />, app)
```

###### 7. Make the webpack:
```
touch webpack.config.js
```
```
//webpack.config.js

const path = require('path')

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}

module.exports = config
```

###### 8. Make .babelrc file:
```
touch .babelrc
```
```
// .babelrc

{
  "presets":[
    "es2015", "react"
  ]
}
```

###### 9. The last step is to add the webpack command to our package.json. Find the scripts object and add another key-value pair under the existing test key.
```
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "webpack",
  "watch": "webpack-dev-server --content-base dist"
}
```

###### Run watch server:
```
npm run watch
```

###### Build application:
```
npm run build
```
