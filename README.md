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
7. go to navbar replace a with link "/fetures/1"
8. go to feature item add a link 
9. in app.js add 'feature/:id"
10. in featureItem.js change path to `${features/${feature.id}`
11. in detail component ` const feature = useParams().featureId;`
12. switch to slugs

## Instructor Notes

These are detailed notes written by various instructors. Feel free to use them or write your own.

- [Aziz's Notes](https://github.com/JoinCODED/DEMO-Template/blob/main/aziz.md)
