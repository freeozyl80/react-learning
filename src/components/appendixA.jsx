import * as React from 'react';
const AppendA = React.createClass({
	handleClick () {
    	this.refs.myTextInput.focus();
  	},
	render() {
		return (
	       <div>
	        <input type="text" ref="myTextInput" />
	        <input type="button" value="Focus the text input" onClick={this.handleClick} />
	      </div>
	    );
	}
});
export default AppendA;