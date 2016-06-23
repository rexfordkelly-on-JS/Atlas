import request from 'axios';

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';

export function getTodos() {

    if(false && process.env.NODE_ENV){
      return {
        type: 'GET_TODOS',
        promise: Promise.resolve({ "data": JSON.parse('[ "fasd",  "daf",  "hi",  "ksjdfalkj",  ",  "gazza",  "h",  "we",  "sex",  "fhdsfdsd",  "add",  "afad",  "adsfad",  "fdsa",  "fag",  "ggg",  "ddd",  "fdsag",  "aaaa",  "123",  "432",  "4",  "1",  "123",  "4",  "12345",  "s",  "s",  "smkjk",  "rewqr",  "rewqr",  "rewqr",  "fdsaf",  "sss",  "ssssss",  "ssssss",  "ssssss",  "sss",  "fdsafsda",  "otra",  "pararasa",  "pfdsaf",  "fdsafsdafsdafas",  "mkmn",  "one two",  "Ok here we go" ]')})
      }
    } else {
      return {
        type:    'GET_TODOS',
        promise: request.get(API_URL)
      }
    }
}

export function createTodo(text) {
  return {
    type:    'CREATE_TODO',
    promise: request.post(API_URL, { time: Date.now(), text })
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}
