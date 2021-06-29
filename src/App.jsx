import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import ItemListContainer from './ItemListContainer';
import { HomeContainer} from './containers/HomeContainer';

function App() {
  return (
    <div>
      <HomeContainer/>
      <ItemListContainer greeting={'Bienvenido gente'}/>
    </div>
  );
}

export default App;
