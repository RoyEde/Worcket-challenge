import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Button from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshots match', () => {
  const component = renderer.create(<Button />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.primary = true;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.disabled = true;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.disabled = true;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
