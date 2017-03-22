var LinkedStateMixin = require('react-addons-linked-state-mixin');
var cloneWithProps = require('react-addons-clone-with-props');
var _makeBlue = function(element) {
  return cloneWithProps(element, {style: {color: 'blue'}});
};
import * as React from 'react';

var WithLink = React.createClass({
  mixins: [LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  handleChange: function(newValue) {
    this.setState({message: newValue});
  },
  render: function() {
  	var valueLink = {
      value: this.state.message,
      requestChange: this.handleChange
    };
    return <div>
    		<input type="text" valueLink={this.linkState('message')} />
    		<div>{this.state.message}</div>
    		<input type="text" valueLink={valueLink} />
    	</div>
  }
});

export default WithLink;