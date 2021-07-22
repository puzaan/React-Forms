import React from 'react';
import './App.css';
import FormIndex from './view/FormEntry/FormIndex'
import{BrowserRouter as Router, Route} from 'react-router-dom'
import SideMenu from './component/SideMenu';
import { makeStyles } from '@material-ui/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import pageHeaders from './component/pageHeaders';
import Header from './view/FormEntry/Header';
import PeopleIcon from '@material-ui/icons/People';
import Form from './view/Form/Form';


const theme = createMuiTheme({
  palette:{
    main: "#333996",
    light: '#3c44b126'
  },
  secondary :{
    main: "#f83245",
    light: '#f8324526'
  }
})

const useStyles = makeStyles ({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  },
  background:{
    default: '#f4f5fd'
  }
})


function App() {
  return (
    
    <Router>
      <Route path='/' component={Form} exact></Route>
      <Route path='/as' component={FormIndex} ></Route>
    </Router>
  );
}

export default App;
