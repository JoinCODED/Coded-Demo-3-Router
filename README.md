# DEMO-NAME

Cookies Planet.

## What is this demo?

Cookies planet delivery service website with 4 components : Home,Features,FeatureDetails and About.

## What are the objectives?

The student should learn how to turn the 4 components into pages and route and navigate between them.

## Steps

1. Installing react-router react-router-dom `npm install react-router react-router-dom`
2. in index.js wrap App with BrowserRouter `import { BrowserRouter } from "react-router-dom";`
3. In App .js Wrap each component with Route and add its path >> test not working `import { Route } from "react-router";` 
4. wrap all routes in Switch `import { Route, Routes } from "react-router";`
5. add exact to each path 
6. rule of thumb longest paths first
7. create a nav bar
8. go to navbar add links to "/" and "/featuers" link `import { Link } from "react-router-dom";`

## part 2:
9. go to feature item add a link above center to="/features/homemade"
10. in app.js add a route for details `feature/homemade`, then to `featurs/:featureId`
11. in featureItem.js change path to `${features/${feature.id}`
12. `import { Navigate, useParams } from 'react-router-dom';`
13. in detail component ` const featureId = useParams().featureId;` 
14. find feature ` const feature = props.features.find( (feature) => feature.id === featureId);`
15. redirect to home if not found
16. switch to slugs

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
