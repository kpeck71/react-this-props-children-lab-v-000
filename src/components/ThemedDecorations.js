import React from 'react'
import PropTypes from 'prop-types'

export default class ThemedDecoration extends React.Component {
  render() {
    const childrenWithClassName =
    React.Children.map(this.props.children, child => {
      return (
        <div className="heaven">{child}</div>
      )
    });
  return (
       <div className="some-component">
         {childrenWithClassName}
       </div>
     );
  }
}
