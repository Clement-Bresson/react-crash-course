## Intro

Snapshot testing can be a quite useful way to test your components. The main idea is to take a picture of what is the component status at a specific moment. However, whenever there is a change, we should compare the snapshot and understand if the differences are relevant and make sense, or if we broke something.

### Jest snapshot

Snapshots can be done using Jest or AVA: the files generated are quite similar despite the fact AVA created an extra file for performant comparisons.

In order to create a snapshot you need to write your component test as usual:

```js
import React from 'react';
import HelloComponent from '../HelloComponent';
import renderer from 'react-test-renderer';

test('Renders hello', () => {
  const component = renderer.create(
    <HelloComponent />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
```

and if our component is defined as:

```js
import React from 'react';

const HelloComponent = () => (
  <div>
    Hello, and welcome to <a href="https://blog.yld.io/">YLD blog</a>!
  </div>
);

export default HelloComponent;
```

this will generated the following:

```js
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Renders hello 1`] = `
<div>
  Hello, and welcome to
  <a
    href="https://blog.yld.io/"
  >
    YLD blog
  </a>
  !
</div>
`;
```

Every time you make a change and try to run `jest` again it will compare both snapshots.

## Challenge!

For the purpose of this exercise ignore the console and look into the exercise directory. You will find a PartyComponent and a __tests__ folder, where the tests for the PartyComponent should be located.

1. Open `__tests__/PartyComponent.test.js` and create a test with the snapshot.
2. Run `yarn run test:jest` and confirm that a `__snapshots__` folder was added inside your `__tests__` folder.
3. Edit PartyComponent (add few components) and run `yarn run test:jest`.
4. Confirm that the snapshot changed and understand how to update it.

### Resources

* [Jest](https://facebook.github.io/jest/)
* [Jest snapshots](http://facebook.github.io/jest/docs/en/snapshot-testing.html)
* [AVA snapshots](https://github.com/avajs/ava#snapshot-testing)
