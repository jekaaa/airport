import { 
	GET_FLIGHTS,
	ADD_FLIGHT,
	GET_FLIGHTS_WITH_FILTER,
  DELETE_FLIGHT,
  EDIT_MODE_ENABLE,
  EDIT_MODE_DISABLE,
  EDIT_FLIGHT
} from '../constants/Admin'

export default function adminPanel(state = {}, action) {
  let listEdit = state.listEdit || [];
  switch (action.type) {
  	case GET_FLIGHTS:
  		return action.payload;
  	case ADD_FLIGHT:
  		return {...state, ...action.payload};
  	case GET_FLIGHTS_WITH_FILTER:
  		return {...state, filter: action.payload};
    case DELETE_FLIGHT:
      return {...state, ...action.payload};
    case EDIT_MODE_ENABLE:
      listEdit.push(action.payload);
      return {...state, listEdit: listEdit}
    case EDIT_MODE_DISABLE:
      listEdit.splice(listEdit.indexOf(action.payload),1);
      return {...state, listEdit: listEdit}
    case EDIT_FLIGHT:
      listEdit.splice(listEdit.indexOf(action.payload),1);
      return {...state, ...action.payload, listEdit: listEdit};

    default:
    	return state;
  }

}