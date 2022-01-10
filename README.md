# Cookie Planet 🍪🪐

## What is this demo?

Cookies planet delivery service website with 4 components : `Home`,`Features`,`FeatureDetails` and `About`.

## What are the objectives?

The student should learn how to turn the 4 components into pages and route and navigate between them.

## Steps

1. Installing react-router react-router-dom `npm install react-router-dom`
2. in index.js wrap App with BrowserRouter `import { BrowserRouter } from "react-router-dom";`
3. In App .js Wrap each component with Route and add its path >> test not working `import { Route } from "react-router-dom";`
4. `import { Route, Routes } from "react-router";` in `App.js`
5. wrap all routes in `<Routes>`
6. add exact to each path
   ```js
   <Route exact path="/PATH" element={<Component />}>
   ```
7. rule of thumb longest paths first
8. create a nav bar
9. go to navbar add links to "/" and "/featuers" link `import { Link } from "react-router-dom";`
   ```js
   <Link to="PATH">
     <COMPONENT />
   </Link>
   ```

## part 2:

10. go to feature item add a link above center to="/features/homemade"
11. in app.js add a route for details `feature/homemade`, then to `featurs/:featureId`
12. in featureItem.js change path to `${features/${feature.id}`
13. `import { Navigate, useParams } from 'react-router-dom';`
14. in detail component ` const featureId = useParams().featureId;`
15. find feature ` const feature = props.features.find( (feature) => feature.id === featureId);`
16. redirect to home if not found
17. switch to slugs
