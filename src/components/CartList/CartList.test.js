import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import CartList from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CartList items={[]} onDelete={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshots match', () => {
  const component = renderer.create(<CartList items={[]} onDelete={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.items = [{ id: '0', item: 'test'}];
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.loading = true;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.items = [{ id: '0', item: 'test' }, { id: '1', item: 'test 2' },];
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.loading = false;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
