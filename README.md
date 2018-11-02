# Pagination Cache

## Description
Advanced Front-End Skills Test to cache items and display on front-end.
###### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Progress

- Application fetches data from the api every time the user navigates through the pages
- Caching is not yet implemented (gaps in knowledge)
- Data fetching with Axios, fetches according to currentPage provided
- Loading indication displays every time fetch request is submitted

## Ideas

The plan for the caching algorithm was to store cached data into hash tables and iterate through as the user navigates through the pages. However, I was unsure about how this approach would work for retrieving more data and deleting previous caches.

## Tech Stack

- React
- Redux (Thunk Middleware)
- Axios
- Material UI

### Total Time taken to build app

2.5 days (submitted incomplete)
