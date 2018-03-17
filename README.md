# rollup_setup

## what is this for? ##

if you want to use this for developing react apps, you might be able to, infact i know you can but it may require modifications. 

this is best suited for those who want to write modern es6 syntax and have it work in the browser. My main reason for creating this
is I like to use javascript modules so that I can organize my code across different javascript files. This happens to 
be an es6 only feature and must be compiled down to es2015 for the browser to read it. That's one example of an es6 feature
that you will be able to use thanks to this setup.

## this tool has 3 features ##

* watches changes in your style.scss file, recompiles the file into a browser friendly style.css
* watches for changes in index.js, recompiles all of your javascript into a browser friendly compiled.js file, also includes a .map file
* serves up your index.html to localhost:3000
* has a build feature for optimising index.js and style.scss for the browser

## How do I use this? ##

#### in development ####
* navigate to the project in your terminal
* run this command in your terminal: npm run start 
* all good! now your project should be compiled, and served up to localhost:3000

#### for production ####
* navigate to the project in your terminal
* run this command in your terminal: npm run build
* compiled.js and style.css will be optimised for the browser and ready for production


