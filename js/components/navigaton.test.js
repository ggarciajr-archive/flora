import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom'
import Navigation from './navigation';

describe('Navigation', () => {
  describe('validate and render the component with the correct language', () => {
    const links = {home: "/", tryFree: "/free"};

    it('Throw an error if prop language is not provide', () => {
      expect(() => TestUtils.renderIntoDocument(<Navigation links={links}/>)()).toThrow();
    })

    it('Throw an error if prop language.title is not provide', () => {
      const lang = {};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it('Throw an error if prop language.home is not provide', () => {
      const lang = {title: "Foo"};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it('Throw an error if prop language.signUp is not provide', () => {
      const lang = {title: "Foo", home: "Foo"};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it('Throw an error if prop language.signIn is not provide', () => {
      const lang = {title: "Foo", home: "Foo", signUp: "Foo"};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it('Throw an error if prop language.tryFree is not provide', () => {
      const lang = {title: "Foo", home: "Foo", signUp: "Foo", singIn: "Foo"};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it ("Render all 5 links plus the toggle button with the correct language", () => {
      const lang = {title: "Nav Title", home: "Nav Home", signUp: "Nav Sign Up", signIn: "Nav Sign In", tryFree: "Nav Try For Free"};
      const navigation = TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />);
      const renderedLinks = ReactDOM.findDOMNode(navigation).querySelectorAll('a');
      const menu = {
        title: renderedLinks[0].text,
        toggle: { text: renderedLinks[1].text , class: renderedLinks[1].getAttribute('class') },
        home: renderedLinks[2].text,
        tryFree: renderedLinks[3].text,
        signUp: renderedLinks[4].text,
        signUp: renderedLinks[4].text,
        signIn: renderedLinks[5].text,
      };
      const expectedMenu = {
        title: 'Nav Title',
        toggle: { text: '' , class: 'custom-toggle' },
        home: 'Nav Home',
        tryFree: 'Nav Try For Free',
        signUp: 'Nav Sign Up',
        signIn: 'Nav Sign In',
      };
      expect(renderedLinks.length).toEqual(6);
      expect(menu).toEqual(expectedMenu);
    })
  })

  describe('validate and render the component with the correct links', () => {
    const lang = {title: "Nav Title", home: "Nav Home", signUp: "Nav Sign Up", signIn: "Nav Sign In", tryFree: "Nav Try For Free"};

    it('Throw an error if prop links is not provide', () => {
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} />)).toThrow();
    })

    it('Throw an error if prop links.home is not provide', () => {
      const links = {tryFree: "/free"};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it('Throw an error if prop links.tryFree is not provide', () => {
      const links = {home: "/"};
      expect(() => TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />)()).toThrow();
    })

    it ("Render all 5 links pluss the toggle button with the correct links", () => {
      const links = {home: "/", tryFree: "/free"};
      const navigation = TestUtils.renderIntoDocument(<Navigation language={lang} links={links} />);
      const renderedLinks = ReactDOM.findDOMNode(navigation).querySelectorAll('a');
      const menu = {
        title: { text: renderedLinks[0].text, link: renderedLinks[0].getAttribute('href') },
        toggle: { text: renderedLinks[1].text , class: renderedLinks[1].getAttribute('class') },
        home: { text: renderedLinks[2].text, link: renderedLinks[2].getAttribute('href') },
        tryFree: { text: renderedLinks[3].text, link: renderedLinks[3].getAttribute('href') },
        signUp: renderedLinks[4].text,
        signIn: renderedLinks[5].text,
      };
      const expectedMenu = {
        title: { text: 'Nav Title', link: '/' },
        toggle: { text: '' , class: 'custom-toggle' },
        home: { text: 'Nav Home', link: '/' },
        tryFree: { text: 'Nav Try For Free', link: '/free' },
        signUp: 'Nav Sign Up',
        signIn: 'Nav Sign In',
      };
      expect(renderedLinks.length).toEqual(6);
      expect(menu).toEqual(expectedMenu);
    })
  })
})
