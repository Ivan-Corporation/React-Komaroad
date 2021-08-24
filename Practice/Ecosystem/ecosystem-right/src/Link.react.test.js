import React from 'react';
import renderer from 'react-test-renderer';
import Jest from './Jest';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Jest page="http://www.facebook.com">Facebook</Jest>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});