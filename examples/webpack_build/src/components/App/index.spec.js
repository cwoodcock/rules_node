require('babel-register');

require('jsdom-global/register');
const React = require('react');
const Enzyme = require('enzyme');
const {mount} = Enzyme;
const Adapter = require('enzyme-adapter-react-15');
const App = require('./').default;

Enzyme.configure({adapter: new Adapter()});

describe('App', () => {
  it('should pass', () => {
    const wrapper = mount(React.createElement(App));
    expect(wrapper.text()).toBe('Hello Computer');
  });
});
