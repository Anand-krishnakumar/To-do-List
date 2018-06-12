import React, { Component } from 'react';
import '../App.css';

class List extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.handleClick1 = this.handleClick1.bind(this);
		this.state ={
			active: 0,
			color: 'black',
			textDecoration: 'none',
			showList: true,
		};
	}
	handleClick(){
		if (this.state.active === 0)
		{
			this.setState({
				active : 1,
				color : 'gray',
				textDecoration: 'line-through',
			});
		}
		else{
			this.setState({
				active: 0,
				color: 'black',
				textDecoration: 'none',
			});
		}
	}
	handleClick1(e){
		e.stopPropagation();
		setTimeout(() => {
		this.setState({
			showList: false
		});}, 500);
	}	
	render(){
		return(
			<div>
			{this.state.showList &&	(<li onClick={this.handleClick} style={this.state}>
				<span className = "remove" onClick ={this.handleClick1}>
					{this.props.spanText}
				</span>

				{this.props.text} 
			</li>
			)
			}
			</div>
		);
	}
}
export default List;