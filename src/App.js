import { ConfigureStore } from './redux/configStore';
import {BrowserRouter} from 'react-router-dom';
import Main from './components/MainComponent';
import './App.css';
import { Provider } from 'react-redux';


const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Main />
        </div>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
