# React interview
 
This is a small interview project. 
 
# Goal
 
Create an UI to search for repositories using the Github public API.
 
# User Scenario
 
As the user,

I want to search for repositories from GitHub,

So that I can get a list of repositories matching the search criteria.

When I input the repository name into the search field,

And I press Enter or click on the "Submit" button,

Then I see the list of repositories from Github matching the criteria.
 
## UX/UI
 
Up to you, probably it should include an input to enter the repository name, one area to display the repositories list.
 
# Retrieving data
 
***Github API:https://help.github.com/en/github/searching-for-information-on-github/searching-for-repositories***
 
***Example:https://api.github.com/search/repositories?q=react:name&sort=stars&order=desc***
 
# Bootstrapping 
 
We recommend using [create-react-app](https://github.com/facebook/create-react-app).
 
# Bonus Points (not in any specific order)
 
The list bellow are only extra points for extra work after building the basic. 
 
* Using ES6 syntax (e.g arrow functions, async/await)
* Using Typescript
* Adding a spinner when information is loading
* Deal with errors coming from the api
* Including some Unit Test or Integration Test
* Having a nice UI using a components library (Bootstrap,Material UI or another)
* Divide the application in different pages and use a router
* Adding state management if you think is relevant
* Show common tools used for you daily development environment (e.g linters, code formatter)