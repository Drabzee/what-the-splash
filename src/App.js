import { Provider } from 'react-redux';
import Header from './components/Header';
import store from './store';
import ImageGrid from './components/ImageGrid'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ImageGrid />
      </div>
    </Provider>
  );
}

export default App;
