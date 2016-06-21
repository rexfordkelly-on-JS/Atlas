import Immutable from 'immutable';

const defaultState = new Immutable.List();

export default function todoReducer(state = defaultState, action) {
  switch(action.type) {
    case 'GET_TODOS':
      if(global){
        return new Immutable.List( JSON.parse('[ "fasd", "daf", "hi", "ksjdfalkj", "", "gazza", "h", "we", "sex", "fhdsfdsd", "add", "afad", "adsfad", "fdsa", "fag", "ggg", "ddd", "fdsag", "aaaa", "123", "432", "4", "1", "123", "4", "12345", "s", "s", "smkjk", "rewqr", "rewqr", "rewqr", "fdsaf", "sss", "ssssss", "ssssss", "ssssss", "sss", "fdsafsda", "otra", "pararasa", "pfdsaf", "fdsafsdafsdafas" ]'));  
      } else {
        return new Immutable.List(action.res.data);   
      }
    case 'CREATE_TODO':
      return state.concat(action.res.data.text);
    case 'EDIT_TODO':
      return state.set(action.id, action.text);
    case 'DELETE_TODO':
      return state.delete(action.id);
    default:
      return state;
  }
}
