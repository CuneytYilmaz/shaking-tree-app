import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import { store } from '../redux/store';
import Basket from '../components/Basket';


it('renders correctly', () => {
  const wrapper = shallow(
        <Provider store={store}>
            <Basket/>
        </Provider>
    );

  expect(wrapper).toMatchSnapshot();
});