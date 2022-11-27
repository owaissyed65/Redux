
import './App.css';
import { useSelector } from 'react-redux';
import Shop from './Shop';

function App() {
  const amount = useSelector(state => state.amount)
  return (
    <div className="App">
      the value of this store is {amount}
      <div>
        <Shop/>
      </div>
    </div>
  );
}

export default App;
