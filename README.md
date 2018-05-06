# Alexandria - A Book Tracking App
Alexandria is a personal library app allowing you to track the books you're reading, want to read, and have read. It's my implementation of a project from the Udacity Frontend Developer Nanodegree program. 

I did not use the provided Udacity starter code, as I wanted to start with a fresh 'create-react-app' and go from there. 

## Live Demo
Alexandria is deployed to Netlify. You can check it out here: [https://alexandria.netlify.com/](https://alexandria.netlify.com/).

## Installing
This project was bootstrapped with create-react-app. You can install it easily so long as you have [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/en/docs/install) installed on your system. Once you do:

```
git clone https://github.com/a-trost/alexandria.git
cd alexandria
```
for npm
```
npm install
npm start
```
for yarn
```
yarn install
yarn start
```

## Backend Server
This project was designed as a purely frontend task. Udacity provided only [the backend](https://reactnd-books-api.udacity.com) and [some functions](https://github.com/a-trost/alexandria/blob/master/src/BooksAPI.js) to read and update data on it. The rest was built by me in React.
### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Skills Used
This project brief was designed to get me to use the recent skills taught in my Udacity React course.
* React
* APIs
* Routing
* JSX
* CSS
* Passing state to child components
* Composition
* Git/Github
* Netlify (Although it's seriously dead simple.)

### Libraries Used
These were both new, and welcome additions to my toolbelt.
* [Material UI](https://material-ui-next.com/)
* [React Router](https://github.com/ReactTraining/react-router)

## License
This is licensed under the [MIT License](https://github.com/a-trost/alexandria/blob/master/LICENSE).

## Acknowledgements
* Udacity for the API and BooksAPI helper functions
* The Book Image was designed by Freepik