import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adminActions from '../actions/adminActions'
import Scoreboard from '../components/Table'


class App extends Component {
  render() {
  	const flights = this.props.admin.flights,
          filter = this.props.admin.filter,
          listEdit = this.props.admin.listEdit;
    return <div>
    	<Scoreboard 
    		flights={flights}
        filter={filter}
        listEdit={listEdit}
    		getFlights={this.props.onGetFlights.getFlights} 
    		addFlight={this.props.onGetFlights.addFlight}
    		filterFlights={this.props.onGetFlights.filterFlights}
        deleteFlight={this.props.onGetFlights.deleteFlight}
        editMode={this.props.onGetFlights.editMode}
        notEditMode={this.props.onGetFlights.notEditMode}
        editFlight={this.props.onGetFlights.editFlight}
    	/>
    </div>
  }
}

function mapStateToProps (state) {
  return {
  	admin: state.adminPanel
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	onGetFlights: bindActionCreators(adminActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)