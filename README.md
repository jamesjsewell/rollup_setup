# rollup_setup

this project is based around https://rollupjs.org/guide/en

## what is this for? ##

if you want to use this for developing react apps, you might be able to, in fact i know you can but it may require modifications. 

this is best suited for those who want to write modern es6 syntax and have it work in the browser. My main reason for creating this
is I like to use javascript modules so that I can organize my code across different javascript files. This happens to 
be an es6 only feature and must be compiled down to es2015 for the browser to read it. That's one example of an es6 feature
that you will be able to use thanks to this setup.

## why use this? ##

* watches changes in your style.scss file, recompiles the file into a browser friendly style.css
* watches for changes in index.js, recompiles all of your javascript into a browser friendly compiled.js file, also includes a .map file
* serves up your index.html to localhost:3000
* has a build feature for optimising index.js and style.scss for production

## getting started ##

1. navigate to the project in your terminal
2. run this command: npm install

## How do I use this? ##

#### in development ####
* navigate to the project in your terminal
* run this command: npm run start 
* all good! check localhost:3000

#### for production ####
* navigate to the project in your terminal
* run this command in your terminal: npm run build
* compiled.js and style.css will be optimised for the browser and ready for production

---------------------------

* your entry code will be kept in index.js and you can branch out by importing code from other files into here
* you will write your styling in style.scss
* compiled.js and style.css are the files used by the browser, don't touch these
* of course you can extend/modify this setup but depending on what mods you make you may have to update the npm scripts in package.json

It appears that it's also possible to process css with rollup as well, which may end up being a more elegant solution than mine, but mine works fine for all intensive purposes. 

## what about keeping API keys safe? ##

there is a known approach for doing this with rollup that I may implement in the future, accepting pull requests for this and any other improvements. 


