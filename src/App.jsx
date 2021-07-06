import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { ItemListContainer} from './containers/ItemListContainer';
import { ItemList } from './components/ItemList';

function App() {
  return (
    <div>
      <ItemListContainer/>
      <ItemList/>
    </div>
  );
}

export default App;
