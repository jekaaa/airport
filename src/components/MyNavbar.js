import React, { Component } from 'react'
import AddPanel from './AddPanel'
import { Button, Navbar, FormControl, FormGroup, Panel, Nav, NavItem } from 'react-bootstrap'

export default class MyNavbar extends Component {
	constructor(...args) {
	    super(...args);
	    this.state = {
	      open: false
	    };
	}
	filter(event) {
		this.props.filterFlights(event.target.value);
	}
	render() {
		let len = this.props.len;
		return <div> 
			<Navbar>
				<Navbar.Header>
				  <Navbar.Brand>
				    <a href="#">Авиарейсы</a>
				  </Navbar.Brand>
				  <Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullLeft>
						<FormGroup>
					      	<FormControl 
					      		placeholder="Поиск по городу"
	     						onChange={::this.filter} 
	     					/>
					    </FormGroup>
				    </Navbar.Form>
				    <Nav pullRight>
				    	{ len > 0? <NavItem>Авиарейсов: { len }</NavItem>: <NavItem>Авиарейсов нет</NavItem> }
				    	<NavItem>
				    		<Button
				    			bsSize="small"
				    			onClick={ ()=> this.setState({ open: !this.state.open })}
				    		>+</Button>
				    	</NavItem>
				    </Nav>
				</Navbar.Collapse>
			</Navbar>
			<Panel collapsible expanded={this.state.open}>
				<AddPanel addFlight={this.props.addFlight}/>
			</Panel>
		</div>
	}

}