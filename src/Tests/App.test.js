import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
describe('Testing app.js', () => {
  it('snapshot should match', () => {
    const component = shallow(<App />);
  
    expect(component).toMatchSnapshot();
  });
});