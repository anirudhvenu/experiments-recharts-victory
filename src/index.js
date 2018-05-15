import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './Router'
import firebase from 'firebase';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import {PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//import Victory from './Victory';
import { Provider} from 'react-redux';
import store from './store'
//const {XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// CHANGE HERE

var config = {
      apiKey: "AIzaSyBPweAHcP4em0PYh8XWzEqjNhTk3OBNS5I",
          authDomain: "dashboard-dev-8b843.firebaseapp.com",
              databaseURL: "https://dashboard-dev-8b843.firebaseio.com",
                  projectId: "dashboard-dev-8b843",
                      storageBucket: "dashboard-dev-8b843.appspot.com",
                          messagingSenderId: "264557605189"
};

try{
firebase.initializeApp(config);
}catch(error){

}




var db = firebase.database();
db.ref('/newCharts').on('value', data => {
  if (data.val()) {
    store.dispatch({ type: 'SET_VAL', payload: data.val() });
      console.log('dispatched & displaying getstate:')
      console.log(store.getState());
      }
});
      

render(

  <BrowserRouter>
  <Provider store = {store}>
  <Root />
  </Provider> 
  </BrowserRouter>
  , 
  document.getElementById('root'));


//render(<App />, document.getElementById('root'));
