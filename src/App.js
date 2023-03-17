import './App.css';
import {Fragment} from 'react'
import Header from './components/Layout/Header';
import Calendar from './components/Main/Calendar';

function App() {
  return (
    <Fragment>
      <Header />
      <Calendar />
    </Fragment>
  );
}

export default App;
