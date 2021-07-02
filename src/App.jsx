import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ItemListContainer from './ItemListContainer';
import { HomeContainer} from './containers/HomeContainer';
import { ItemCount } from './components/ItemCount';

function App() {
  return (
    <div>
      <HomeContainer/>
      <ItemListContainer greeting={'Bienvenido gente'}/>
      <ItemCount/>
    </div>
  );
}

export default App;
