# DEMO-NAME

Cookies Planet.

## What is this demo?

Cookies planet delivery service website with 4 components : Home,Features,FeatureDetails and About.

## What are the objectives?

The student should learn how to turn the 4 components into pages and route and navigate between them.

## Steps

1. Installing react-router react-router-dom `yarn add react-router react-router-dom`
2. Wraping App in index.js with BrowserRouter
3. In App .js Wrap each component with Route and add its path (remove details component for now) 
4. wrap all routes in Switch
5. add exact to each path
6. create a nav bar
7. go to navbar add links to "/" and "/featuers" link

## part 2:
9. go to feature item add a link 
10. in app.js add a route for details 'feature/:id"
11. in featureItem.js change path to `${features/${feature.id}`
12. in detail component ` const feature = useParams().featureId;`
13. switch to slugs

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
