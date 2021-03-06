import React, { PureComponent } from 'react';
import './Title.css'

class Title extends PureComponent {
  render() {
    return (
      <h1 className="title_center">{this.props.content}</h1>
    );
  }
}

export default Title;
