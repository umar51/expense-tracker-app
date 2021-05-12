import {Header} from "./components/Header";
import {Balance} from "./components/Balance";
import {IncomeExpenses} from "./components/IncomeExpenses"; 
import './App.css';
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { swDev } from "./swDev";
import firebase from './firebase.js';

function App() {
  const msg = firebase.messaging();
  msg.requestPermission().then(()=> {
    return msg.getToken();
  }).then(token => {
    console.log('token', token)
  })

  return (
    <div>
      <GlobalProvider>
        <Header/>
        
        <div className="container">
          <Balance/>
          <IncomeExpenses/>
          <TransactionList/>
          <AddTransaction/>
        </div>
      </GlobalProvider>


    </div>
  
  );
}

swDev();

export default App;