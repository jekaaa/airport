import React, { Component } from 'react'
import { Button, FormControl, Col } from 'react-bootstrap'

export default class AddPanel extends Component {
	constructor(...args) {
	    super(...args);
	    this.state = {
	      number: "",
	      fromCity: "",
	      toCity: "",
	      type: "",
	      time: "",
	      realTime: "",
	      status: ""
	    };
	}
	addClick() {
		let flight = {
			number: this.state.number,
			fromCity: this.state.fromCity,
			toCity: this.state.toCity,
			type: this.state.type,
			time: this.state.time,
			realTime: this.state.realTime,
			status: this.state.status
		}
		this.props.addFlight(flight);
		this.setState({ number: "" });
		this.setState({ fromCity: "" });
		this.setState({ toCity: "" });
		this.setState({ type: "" });
		this.setState({ time: "" });
		this.setState({ realTime: "" });
		this.setState({ status: "" });

	}
	render() {
		const style={marginBottom:"10px"};
		return <div>
			<Col md={6}>
				<FormControl 
					value={this.state.number}
					onChange={ e => this.setState({ number: e.target.value }) }
					placeholder="Введите номер рейса"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<FormControl
					value={this.state.fromCity}
					onChange={ e => this.setState({ fromCity: e.target.value }) }
					placeholder="Введите город вылета"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<FormControl
					value={this.state.toCity}
					onChange={ e => this.setState({ toCity: e.target.value }) }
					placeholder="Введите город прилета"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<FormControl
					value={this.state.type}
					onChange={ e => this.setState({ type: e.target.value }) }
					placeholder="Введите тип самолета"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<FormControl
					value={this.state.time}
					onChange={ e => this.setState({ time: e.target.value }) }
					placeholder="Введите время"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<FormControl
					value={this.state.realTime}
					onChange={ e => this.setState({ realTime: e.target.value }) }
					placeholder="Введите фактическое время"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<FormControl
					value={this.state.status}	
					onChange={ e => this.setState({ status: e.target.value }) }
					placeholder="Введите статус"
					style={style}
				/>
			</Col>
			<Col md={6}>
				<Button onClick={::this.addClick}>Добавить рейс</Button>
			</Col>
		</div>
	}
}