## Intro
When developing a large application, a common requirement is to be able to structure the project into multiple pages with addressable urls. 
React Router is a useful and well supported solution to this need. It allows to define multiple routes and connect them to different components.

In this example, we have 2 routes : a home (`/`) and an about page (`/about`).

```js
<Route exact path="/" component={Home}/>
<Route path="/about" component={About}/>
```

In this context, the Home route needs an additional `exact` property. Path matching in React Router allows multiple routes to match for one url. 

## Challenge!
* Try removing the exact property on the Home route and see what happens when you navigate to the `/about` route.
* Add a new route (eg: Contact).
* Add a link in the navigation to be able to access the new route.

### Resources
* [React Router philosophy](https://reacttraining.com/react-router/web/guides/philosophy)