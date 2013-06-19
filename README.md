# Angular Socket.io Seed

Start an awesome app with AngularJS on the front, Socket.io + Express + Node on the back. This
project is an application skeleton for writing [AngularJS](http://angularjs.org/) apps that use
web sockets to add real-time functionality. If you're not planning on using web sockets, you
should consider the [Angular Express Seed](https://github.com/btford/angular-express-seed) instead.

The seed app shows how to wire together Angular client-side components with Socket.io and Express
on the server. It also illustrates writing angular partials/views with the Jade templating library.

_Note: Although Jade supports interpolation, you should be doing that mostly on the client. Mixing
server and browser templating will convolute your app. Instead, use Jade as a syntactic sugar for
HTML, and let AngularJS take care of interpolation on the browser side._

## Changes:
*    Forked from: https://github.com/btford/angular-socket-io-seed
*    Switched to use bower for client side dependencies
*    Add env based port setting to app.js

## How to use it

Clone the angular-socket-io-seed repository then run:

     npm install -g bower # if you don't already have this
     npm install
     bower install

### Running the app

Runs like a typical express app:

    node app.js

By default the app will run on port 8080 but can be changed by setting PORT in your environment before starting.

### Running tests

Coming soon!

### Receiving updates from upstream

Just fetch the changes and merge them into your project with git.

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    bower.json          --> for bower
    public/             --> all of the app specific files to be used on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        app.js          --> declare top-level app module
        controllers.js  --> application controllers
        directives.js   --> custom angular directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services        
    routes/
      index.js          --> route for serving HTML pages and partials
    views/
      index.jade        --> main page for app
      layout.jade       --> doctype, title, head boilerplate
      partials/         --> angular view partials (partial jade templates)
        partial1.jade
        partial2.jade



## Contact

For more information on AngularJS please check out http://angularjs.org/
For more on Express and Jade, http://expressjs.com/ and http://jade-lang.com/ are
your friends.
