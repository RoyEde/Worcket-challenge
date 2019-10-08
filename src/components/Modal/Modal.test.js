import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Modal from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Modal visible={false} onAccept={() => {}} onCancel={() => {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('snapshots match', () => {
  const component = renderer.create(<Modal visible onAccept={() => {}} onCancel={() => {}} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.visible = false;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  
  tree.props.visible = true;
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
