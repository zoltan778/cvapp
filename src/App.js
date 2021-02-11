import './App.css';
import Div from './components/Div/Div';
import Textarea from './components/Textarea/Textarea';
import { useJson } from './api/useData';


function App() {

  const data = useJson();

  return (
    <div className="App">

        <Div data={data}></Div>
        <Textarea></Textarea>
        <button type="button">Reset</button>
    </div>
  );
}

export default App;
