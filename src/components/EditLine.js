import React, { Component } from 'react'
import { FormControl, Button} from 'react-bootstrap'
import $ from 'jQuery'

export default class EditLine extends Component {
	constructor(...args) {
	    super(...args);
	    this.state = {
	    	id: this.props.item.id,
			number: this.props.item.number,
			fromCity: this.props.item.fromCity,
			toCity: this.props.item.toCity,
			type: this.props.item.type,
			time: this.props.item.time,
			realTime: this.props.item.realTime,
			status: this.props.item.status
	    };
	}
	notEditMode(event) {
		this.props.notEditMode(event.target.id);
	}
	editClick(event) {
		this.props.editFlight(this.state);
	}
	render() {
		return(
          	<tr>
		        <td><FormControl 
		        	defaultValue={this.props.item.number}
		        	placeholder="Введите номер рейса"
		        	onChange={ e => this.setState({ number: e.target.value }) }
		        /></td>
	            <td><FormControl
		        	defaultValue={this.props.item.fromCity}
		        	placeholder="Введите город вылета"
		        	onChange={ e => this.setState({ fromCity: e.target.value }) }
		        /></td>
	            <td><FormControl
		        	defaultValue={this.props.item.toCity}
		        	placeholder="Введите город прилета"
		        	onChange={ e => this.setState({ toCity: e.target.value }) }
		        /></td>
	            <td><FormControl
		        	defaultValue={this.props.item.type}
		        	placeholder="Введите тип самолета"
		        	onChange={ e => this.setState({ type: e.target.value }) }
		        /></td>
	            <td><FormControl
		        	defaultValue={this.props.item.time}
		        	placeholder="Введите время"
		        	onChange={ e => this.setState({ time: e.target.value }) }
		        /></td>
	            <td><FormControl
		        	defaultValue={this.props.item.realTime}
		        	placeholder="Введите фактическое время"
		        	onChange={ e => this.setState({ realTime: e.target.value }) }
		        /></td> 
		        <td><FormControl
		        	defaultValue={this.props.item.status}
		        	placeholder="Введите статус"
		        	onChange={ e => this.setState({ status: e.target.value }) }
		        /></td>
		        <td>
		        	<Button 
		        		id={this.props.item.id}
		        		onClick={::this.editClick}
		        		bsSize="small"
		        	>Сохранить</Button>
		        </td>
		        <td>
	        	<Button 
	        		id={this.props.item.id}
	        		onClick={::this.notEditMode}
	        		bsSize="small"
	        	>Отмена</Button>
	        	</td>
		    </tr>
        )
	}
}