import 'jsdom-global/register';
import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-15';
import {expect} from 'chai';
import App from './index.ts';

const {mount} = Enzyme;

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
  it('should render hello inside App component', () => {
    const wrapper = mount(React.createElement(App));
    expect(wrapper.text()).to.equal('hello there');
  });
});
