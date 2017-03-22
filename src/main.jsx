import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute, browserHistory} from 'react-router'


import Lists from './components/list.jsx';   // 主页
import AppendA from './components/appendixA.jsx';   // 主页
import AppendB from './components/appendixB.jsx';   // 主页
import WithLink from './components/twoWay.jsx';   // 主页

const App = React.createClass({
	render() {
		return (
			<div>
				<div>APP!@!</div>
				<li><Link to="/users">Users</Link></li>
          		<li><Link to="/persons">Persons</Link></li>
				{this.props.children}
			</div>
		)
	}
});
const Users = React.createClass({
	render() {
		return (
			<div>This is Users</div>
		)
	}
});
const Persons = React.createClass({
	render() {
		return (
			<div>This is Persons</div>
		)
	}
});
const CommentList = React.createClass({
  getInitialState: function() {
    return {childData: 111111111};
  },
  componentDidMount: function() {
  	 var me = this;
  	 setTimeout(function(){
  	 	me.setState({childData: 22222})
  	 }, me.props.pollInterval);
  },
  render () {
  	var content = this.props.data.map(function (argument) {
  		return (
  			<div>
	  			<div>{argument.id}</div>
	  			<div>{argument.text}</div>
  			</div>
  		);
  	})
    return (
      <div className="commentList">
        Hello, world! I am a CommentList.
        <p>{content}</p>
        <Child to={this.state.childData}/>
      </div>
    );
  }
});

const Child = React.createClass({
	render() {
		return (
			<div>{this.props.to}</div>
		)
	}
});

const data = [
	{id: 1, text:'this is text'},
	{id: 2, text:'this is word'}
];

var RForm = React.createClass({
  getInitialState: function() {
    return {formData: ''};
  },
  handleFormDataChange: function(e) {
    this.setState({formData: e.target.value});
  },
  render: function () {
  	return (
  		<form>
  			<input type="text" 
  				value={this.state.formData}
  				onChange={this.handleFormDataChange}/>
  			<div>{this.state.formData}</div>
  		</form>
  	)
  }
});
function FancyCheckbox(props) {
  var fancyClass = props.checked ? 'FancyChecked' : 'FancyUnchecked';
  return (
    <div className={fancyClass} onClick={props.onClick}>
      {props.children}
    </div>
  );
}
ReactDOM.render((
	<div>
	<RForm/>
	<CommentList data={data} pollInterval={2000}/>
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Users}/>
			<Route path="users" component={Users}/>
			<Route path="persons" component={Persons}/>
		</Route>
	</Router>
	<div>-----------------华丽的分割线------------------------</div>
	<Lists>
		<span>hello</span>
    	<span>world</span>
    </Lists>
    <AppendA></AppendA>
    <FancyCheckbox checked={true} onClick={console.log.bind(console)}>
      Hello world!
    </FancyCheckbox>
    <div>-----------------看看有什么高级用法喽------------------------</div>
    <AppendB></AppendB>
    <WithLink></WithLink>
	</div>),
	document.getElementById('container')
);
