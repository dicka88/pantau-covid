# PANTAU COVID - Pantau penyebaran corona di indonesia

Terkait dengan bencana alam wabah pandemik Covid-19 dan maraknya API yang bertebaran di internet untuk para developers, maka diputuskan kami untuk membuat web latihan untuk memantau penebaran covid-19.

## DEMO
See [DEMO][https://pantaucovid.netlify.com] , we using netlify to serve static site

## Build
You will need Node.js installed on your system.

~~~ sh
# install all dependencies
$ npm install

# For development, localhost:8080
$ npm run dev

# For production, this will generate dist directory
$ npm run prod
~~~

The result for production is dist directory, to serve it, use server module
~~~ sh
$ npm install -g serve
$ serve dist -p 3000
~~~

you can set manually that port

## Dependencies
``` json
"dependencies": {
  "@fortawesome/fontawesome-svg-core": "^1.2.28",
  "@fortawesome/free-brands-svg-icons": "^5.13.0",
  "@fortawesome/free-solid-svg-icons": "^5.13.0",
  "regenerator-runtime": "^0.13.5"
},
"devDependencies": {
  "@babel/core": "^7.9.0",
  "@babel/preset-env": "^7.9.0",
  "app-manifest-webpack-plugin": "^1.2.0",
  "babel-loader": "^8.1.0",
  "css-loader": "^3.4.2",
  "file-loader": "^6.0.0",
  "html-webpack-plugin": "^4.0.4",
  "image-webpack-loader": "^6.0.0",
  "style-loader": "^1.1.3",
  "webpack": "^4.42.1",
  "webpack-cli": "^3.3.11",
  "webpack-dev-server": "^3.10.3",
  "webpack-merge": "^4.2.2",
  "workbox-webpack-plugin": "^5.1.2"
}
```

## Thanks to
1. [Dicoding][https://dicoding.com], for exercise frontend web component class
2. [Netlify][https://netlify.com], Static site server
3. [Mathdroid][https://covid19.mathdro.id], covid api
4. [Fontawesome][https://fontawesome.com], free icon
