import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import CartItem from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartItem item="test" onDelete={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshots match', () => {
  const component = renderer.create(<CartItem item="test" onDelete={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.item = 'test 2';
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
