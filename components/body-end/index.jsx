import React from 'react';
import ReactDOM from 'react-dom';

const onBodyClickCallback = (target, props) => {
  if (props.onBodyClick && !target.closest('.shopping-layer')) {
    props.onBodyClick();
  }
};

export default class extends React.PureComponent {
  componentDidMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
    document.body.addEventListener(
      'click',
      event => onBodyClickCallback(event.target, this.props),
      {
        once: true,
      }
    );

    this.internalRender();
  }

  componentDidUpdate() {
    this.internalRender();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.popup);
    document.body.removeChild(this.popup);
  }

  internalRender() {
    ReactDOM.render(this.props.children, this.popup);
  }

  render() {
    return null;
  }
}
