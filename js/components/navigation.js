import * as React from 'react';
import render from 'react-dom';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { opened : false };

    // React + ES6 has no automatically autobinding
    // So we need to explicitly use .bind(this) or fat arrows.
    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    this.setState({ opened: !this.state.opened })
    e.currentTarget.classList.toggle('x');
    this.refs.menuBottom.classList.toggle('visible');
  }

  render() {
    return (
    <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <div className="pure-u-1 pure-u-md-1-3">
        <div className="pure-menu">
          <a className="pure-menu-heading" href={this.props.links.home}>
            <i className="fa fa-clock-o"></i>
            {this.props.language.title}
          </a>
          <a href="#" className="custom-toggle" id="toggle" onClick={this.toggle}>
            <s className="bar"></s>
            <s className="bar"></s>
          </a>
        </div>
      </div>
      <div className="pure-u-1 pure-u-md-2-3 menu-bottom" ref="menuBottom">
        <div className="pure-menu pure-menu-horizontal">
          <ul className="pure-menu-list">
            <li className="pure-menu-item" pure-menu-selected>
              <a href={this.props.links.home} className="pure-menu-link">{this.props.language.home}</a>
            </li>
            <li className="pure-menu-item">
              <a href={this.props.links.tryFree} className="pure-menu-link">{this.props.language.tryFree}</a>
            </li>
            <li className="pure-menu-item">
              <a href="#" className="pure-menu-link">{this.props.language.signUp}</a>
            </li>
            <li className="pure-menu-item">
              <a href="#" className="pure-menu-link">{this.props.language.signIn}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    );
  }
}

Navigation.propTypes = {
  language: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    home: React.PropTypes.string.isRequired,
    signUp: React.PropTypes.string.isRequired,
    signIn: React.PropTypes.string.isRequired,
    tryFree: React.PropTypes.string.isRequired
  }).isRequired,
  links: React.PropTypes.shape({
    home: React.PropTypes.string.isRequired,
    tryFree: React.PropTypes.string.isRequired
  }).isRequired
};
export default Navigation;
