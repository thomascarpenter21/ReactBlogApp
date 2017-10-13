import _ from "lodash";
import { FETCH_POST } from '../actions';

export default function(state = {}, action) {
	switch (action.type) {
		case FETCH_POST:
			return _.mapKeys(action.payload.data, "id");
		default:
			return state;
		}
	}
