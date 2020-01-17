# FrontEnd for Web Page Analyzer

## Installation & Usage
* Install latest NODE.js
* In your terminal, go to project root folder
* Run "npm install"
* To run development server with live reload with remote api, run "npm start"
* To run development server with live reload with local api, run "npm run start:local".
* To build in CI pipeline: "npm run build:prod"
    * To run the built app, in your terminal go to "dist" directory and run "static-server --port 4200". This presumes that you have installed npm package "static-server" globally. You can also use any other server to serve static html files
* To run tests in CI pipeline: "npm run test:prod"
* To build storybook in CI pipeline: "npm run build:storybook"
* For more available commands, see "scripts" package.json

## Code rules
* JS file structure
* Ngrx structure
* JS coding rules
* Styles file structure
* Styles naming rules
* Storybook examples shall be called *-example.component.ts

### JS file structure
* companyName-ui-components contain no business logic('aka' stupid) ui components
* companyName-lib contains features that can be reused over all company projects
* app is based on "route | feature" structure
** each module has:  
-components/(optional for feature)    
-container/(optional for feature)  
-routing/(optional for feature)  
-state/(optional for any)   
-features/(optional for any)  
-services/(optional for any)  
** each state folder uses see: "Ngrx structure"

### Ngrx structure
* foo.actions  
* foo.models  
* foo.constants(optional)  
* foo.effects(optional)  
* foo.reducer  
* foo.selectors

### test file structure
* for test files we create __test__ folder
* for all test related files we create __mock__ folder

### JS coding rules
* Rules are defined in tslint.json
* Prettier and tslint are used to autoformat code on each file save when possible. To achieve this, IDE should be setuped accordingly.
  * Setup VS Code: 
	  * Install [recommended workspace extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_recommended-extensions) 
	* Check if workspace settings do not conflict with your user settings
  * Setup WebStorm:
  	  * Prettier => add file watcher from file/settings/tools/file watchers, choose prettier, then in set file type => typescript, files => project files, have prettier installed locally as by default Webstorm looks for it in node_modules, alco there are 2 checkboxes: trigger on external changes and regardless of syntax errors, strongly suggest using them.
  	  * Tslint => npm install -g tslint typescript, then add a file watcher from file/settings/tools/file watchers, choose custom, name it tslint, then in set file type => typescript, files => project files, program => C:\Users\"SOME USER"\AppData\Roaming\npm\tslint.cmd, arguments => -c $ProjectFileDir$\tslint.json --fix $FileName$, also check the checkbox for trigger on external changes

### Styles file structure
* /atomic: based on http://bradfrost.com/blog/post/atomic-web-design/
* /css-reset: edited and tweaked https://cssreset.com/scripts/eric-meyer-reset-css/
* /theme: is our project variable zone
* /vendor: is a place to override something from 3rd party library's

### Styles naming rules
* Rules are based on BEM methodology http://getbem.com/introduction/
* Variable naming convention:  
"bdrsInputPrimary"  
this example shows how it is structured:  
first part "bdrs" - is based on emmet shortcut for a parameter we want to effect  
second part "Input" - is based on what element we want to effect  
third part "Primary" - is any name we create, but with a goal to be as clear as possible

### Work flow
* researched available tools: https://www.codementor.io/@hirenpatel545/5-best-javascript-web-scraping-libraries-and-tools-sicow2rx9 (~1hr)
* did a setup of initial files (used my 'zagatovke for angular 8') (~30min)  
* wrote first feature (~30min)
* wrote second feature (~30min)
* wrote third feature (~2hr)
* wrote fourth feature (~1hr)
* created all ui components in story book and mapped them to features (~1hr)
* implemented field validation and extra functionality (~1hr)
* wrote unit tests for some functions just to show i know how to write them:) (~30min)
* all work took ~8hrs also i did somethings that might seem not needed,  
but i wanted to show my knowledge of tools like storybook, redux,  
how i would implement reusable stuff over all company not just single project,  
also this app is responsive and progressive web app too
