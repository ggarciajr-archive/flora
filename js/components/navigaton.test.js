import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom'
import Navigation from './navigation';

describe('Navigation', () => {
  it('Throw an error if prop language is not provide', () => {
    expect(() => TestUtils.renderIntoDocument(<Navigation />)()).toThrow();
  })

  it('Throw an error if prop language.title is not provide', () => {
    const lang = {};
    expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} />)()).toThrow();
  })

  it('Throw an error if prop language.home is not provide', () => {
    const lang = {title: "Foo"};
    expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} />)()).toThrow();
  })

  it('Throw an error if prop language.signUp is not provide', () => {
    const lang = {title: "Foo", home: "Foo"};
    expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} />)()).toThrow();
  })

  it('Throw an error if prop language.signIn is not provide', () => {
    const lang = {title: "Foo", home: "Foo", signUp: "Foo"};
    expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} />)()).toThrow();
  })

  it('Throw an error if prop language.tryFree is not provide', () => {
    const lang = {title: "Foo", home: "Foo", signUp: "Foo", singIn: "Foo"};
    expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} />)()).toThrow();
  })

  it ("Render all 5 links pluss the toggle button with the correct language", () => {
    const lang = {title: "Nav Title", home: "Nav Home", signUp: "Nav Sign Up", signIn: "Nav Sign In", tryFree: "Nav Try For Free"};
    const navigation = TestUtils.renderIntoDocument(<Navigation language={lang} />);
    const links = ReactDOM.findDOMNode(navigation).querySelectorAll('a');
    const menu = {
      title: links[0].text,
      toggle: { text: links[1].text , class: links[1].getAttribute('class') },
      home: links[2].text,
      tryFree: links[3].text,
      signUp: links[4].text,
      signUp: links[4].text,
      signIn: links[5].text,
    };
    const expectedMenu = {
      title: 'Nav Title',
      toggle: { text: '' , class: 'custom-toggle' },
      home: 'Nav Home',
      tryFree: 'Nav Try For Free',
      signUp: 'Nav Sign Up',
      signIn: 'Nav Sign In',
    };
    expect(links.length).toEqual(6);
    expect(menu).toEqual(expectedMenu);
  })
})
