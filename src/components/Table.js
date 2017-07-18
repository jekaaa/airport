import React, { Component } from 'react'
import EditLine from './EditLine'
import Line from './Line'
import MyNavbar from './MyNavbar'
import { Table } from 'react-bootstrap'

export default class Scoreboard extends Component {
	componentDidMount() {
		this.props.getFlights();
	}
	render() {
		const flights = this.props.flights,
			  filter = this.props.filter,
			  listEdit = this.props.listEdit;
			  
		let tableTemplate,
			len = 0;
		if (filter){
			tableTemplate = flights
			.filter(item => (
				(item.fromCity.indexOf(filter) >=0) || 
				(item.toCity.indexOf(filter) >=0))
			)
		}
		else tableTemplate = flights;
		if (flights){
			len = tableTemplate.length;
			tableTemplate = tableTemplate.map(item => {
				if (listEdit && listEdit.indexOf(item.id.toString()) >= 0) {
					return <EditLine 
						key={item.id} 
						item={item} 
						notEditMode={this.props.notEditMode} 
						editFlight={this.props.editFlight}
					/>}
		        else {
				    return <Line 
				    	key={item.id} 
				    	item={item} 
				    	editMode={this.props.editMode} 
				    	deleteFlight={this.props.deleteFlight}
				    />}
		    })
		}
		return <div>
			<MyNavbar 
				len={len} 
				filterFlights={this.props.filterFlights} 
				addFlight={this.props.addFlight}
			/>
			<Table responsive>

			    <thead>
			      <tr>
			        <td>Номер рейса</td>
			        <td>Город вылета</td>
			        <td>Город прилета</td>
			        <td>Тип самолета</td>
			        <td>Время</td>
			        <td>Фактическое время</td>
			        <td>Статус</td>
			        <td></td>
			        <td></td>
			      </tr>
			    </thead>
			    <tbody>
			    	{tableTemplate}
			    </tbody>
			</Table>
			
		</div>
	}
}