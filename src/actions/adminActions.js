import { 
	GET_FLIGHTS,
  ADD_FLIGHT,
  GET_FLIGHTS_WITH_FILTER,
  DELETE_FLIGHT,
  EDIT_MODE_ENABLE,
  EDIT_MODE_DISABLE,
  EDIT_FLIGHT
} from '../constants/Admin'
import $ from 'jQuery'

export function getFlights() {

  return dispatch => {

    $.ajax({
      url: '/api',
      method: 'GET',
      success: (function(res){
        dispatch({
          type: GET_FLIGHTS,
          payload: res
        })

      })
    })

  }
}

export function addFlight(flight) {
  
  return dispatch => {

    $.ajax({
      url: '/api',
      method: 'POST',
      data: flight,
      success: (function(res){
        $.ajax({
          url: '/api',
          method: 'GET',
          success: (function(res){
            dispatch({
              type: ADD_FLIGHT,
              payload: res
            })

          })
        })

      })
    })

  } 
}

export function filterFlights(filter) {

  return dispatch => {
    
    dispatch({
      type: GET_FLIGHTS_WITH_FILTER,
      payload: $.trim(filter)
    })

  }
}

export function editFlight(flight) {

   return dispatch => {

    $.ajax({
      url: '/api',
      method: 'PUT',
      data: flight,
      success: (function(res){
        $.ajax({
          url: '/api',
          method: 'GET',
          success: (function(res){
            dispatch({
              type: EDIT_FLIGHT,
              payload: res
            })

          })
        })

      })
    })

  } 
}

export function deleteFlight(id) {
  
  return dispatch => {

    $.ajax({
      url: '/api',
      method: 'DELETE',
      data: {id: id},
      success: (function(res){
        $.ajax({
          url: '/api',
          method: 'GET',
          success: (function(res){
            dispatch({
              type: DELETE_FLIGHT,
              payload: res
            })

          })
        })

      })
    })

  } 
}

export function editMode(id) {

  return dispatch => {
    
    dispatch({
      type: EDIT_MODE_ENABLE,
      payload: id
    })

  }
}

export function notEditMode(id) {

  return dispatch => {
    
    dispatch({
      type: EDIT_MODE_DISABLE,
      payload: id
    })

  }
}