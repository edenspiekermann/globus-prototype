import React from 'react';
import ReactDOM from 'react-dom';

export default class extends React.PureComponent {
  componentDidMount() {
    this.popup = document.createElement('div');
    document.body.appendChild(this.popup);
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
