import * as React from 'react';
const Lists = React.createClass({
	render() {
		return (
	      <ol>
	      {
	        React.Children.map(this.props.children, function (child) {
	          return <li>{child}</li>;
	        })
	      }
	      </ol>
	    );
	}
});
export default Lists;