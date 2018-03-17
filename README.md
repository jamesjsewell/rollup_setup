# rollup_setup

## what is this for? ##

if you want to use this for developing react apps, you might be able to, infact i know you can but it may require modifications. 

this is best suited for those who want to write modern es6 syntax and have it work in the browser. My main reason for creating this
is I like to use javascript modules so that I can organize my code across different javascript files. This happens to 
be an es6 only feature and must be compiled down to es2015 for the browser to read it. That's one example of an es6 feature
that you will be able to use thanks to this setup.

## why use this? ##

* watches changes in your style.scss file, recompiles the file into a browser friendly style.css
* watches for changes in index.js, recompiles all of your javascript into a browser friendly compiled.js file, also includes a .map file
* serves up your index.html to localhost:3000
* has a build feature for optimising index.js and style.scss for the browser

## getting started ##

lots of text, simple mandatory consideration ( for development ):
before you use this project, there is a one time step that must be done. Why? because I used a tool called 'ttab' which needs to be allowed special privelages in order to work. The reason for using ttab is because it enables me to open new tabs in the terminal. my npm script 'npm run start' uses an individual tab in the terminal for each of the three processes, a tab for watching js, one for watching scss, and one for serving the files. This saves the extra step of opening a new tab and running these manually. this is the npm module https://www.npmjs.com/package/ttab

1. quoted from the ttab npm module:
"Important: Irrespective of installation method, Terminal / iTerm2 (iTerm.app) needs to be granted access for assistive devices in order for ttab to function properly, which is a one-time operation that requires administrative privileges.
If you're not prompted on first run and get an error message instead, go to System Preferences > Security & Privacy, tab Privacy, select Accessibility, unlock, and make sure Terminal.app / iTerm.app is in the list on the right and has a checkmark.
For more information, see Apple's support article on the subject" https://support.apple.com/en-us/HT202802
2. navigate to the project in your terminal
3. run this command: npm install

## How do I use this? ##

#### in development ####
* navigate to the project in your terminal
* run this command: npm run start 
* all good! check localhost:3000

#### for production ####
* navigate to the project in your terminal
* run this command in your terminal: npm run build
* compiled.js and style.css will be optimised for the browser and ready for production


