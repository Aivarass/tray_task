# Task

Software Development Engineer in Test - Take Home Task
As part of the interview process you have been requested to complete a take home task. You will find everything you need below. If you have any questions please contact a member of the talent team.

Overview
At tray.io, we have multiple test suites: browser automation using WebdriverIO, Cucumber, Selenium and an API test suite both written in Typescript. In our API test suite we use Axios to make API calls (including GraphQL) and this is built on top of Jest. These suites allow us to quickly check if everything still works correctly from a user's perspective after an update. One of your major responsibilities as a Software Development Engineer in Test will be to maintain and expand these frameworks.

The purpose of this task is to assess your approach to UI test automation.

The Task
You are to create a browser-based UI test that will validate that we're able to successfully add items to your basket and remove an item. Your automation must follow the below steps:

Login to https://www.saucedemo.com/ using the "standard_user" account
Sort the products by Price (high to low)
Add the two cheapest products to your basket
Open the basket
Remove the cheapest product from your basket
Checkout
Finish on the page where you need to enter your name and postal code (you do not need to fill in this form)
Here's a walkthrough video demonstrating how this works: Video Link

Don't hesitate to reach out if you have any questions.

This is the specific user journey we want to see automated.

Notes
You should approach this task as if building the foundation of an entire browser framework. Your test should live in a structure that's easy to understand and expand with additional tests.

On the tech side: Your solution must be written in and run as a Node.js application. This role will require you to write code to run on Node.js written in TypeScript and use npm or yarn etc. That's what we want to see in your solution.

Our suggestion is to use WebdriverIO for the browser automation. But you are welcome to use other frameworks (e.g. Selenium, Puppeteer, Playwright etc.) as long as it's JavaScript-based and open-source. You are free to use any other npm packages you want (including test frameworks such as mocha).

We ask that you do NOT use any existing boilerplate code or framework templates for your solution.

Please put your solutions in a git repository along with instructions on how to run. We should be able to clone and successfully run it locally using the provided instructions.

Assessment criteria
Demonstrated TypeScript or JavaScript and Node.js knowledge (the more modern syntax the better!)
The test code is concise and easy to understand
The test effectively validates the intended functionality
The framework is well structured
The framework can be extended in an intuitive way

# Dependencies

* Node.js
* Chrome
* Java 


# Test execution

* Clone this repo
* Install node modules using ```npm install```
* Build the project using ```npm run build```
* Run tests using ```npm run test```
