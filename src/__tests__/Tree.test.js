import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import Tree from '../components/Tree';


it('renders correctly', () => {
  const wrapper = shallow(
        <Provider store={store}>
            <Tree/>
        </Provider>
    );

  expect(wrapper).toMatchSnapshot();
});