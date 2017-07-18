import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Line extends Component {
	deleteClick(event) {
		this.props.deleteFlight(event.target.id);
	}
	editMode(event) {
		this.props.editMode(event.target.id);
	}
	render() {
		return(
		    <tr>
	          	<td>{this.props.item.number}</td>
	          	<td>{this.props.item.fromCity}</td>
	          	<td>{this.props.item.toCity}</td>
	            <td>{this.props.item.type}</td>
	            <td>{this.props.item.time} </td>
	            <td>{this.props.item.realTime}</td> 
		        <td>{this.props.item.status}</td>
		        <td>
		        	<Button 
		        		id={this.props.item.id}
		        		onClick={::this.editMode}
		        		bsSize="small"
		        	>Изменить</Button>
		        </td>
		        <td>
	        	<Button 
	        		id={this.props.item.id}
	        		onClick={::this.deleteClick}
	        		bsSize="small"
	        	>Удалить</Button>
	        	</td>
		    </tr>
		)
	}
}