import whatsappImg from './assets/whatsapp.png';
import SampleComponent from './components/SampleComponent'


import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import ChildComponent from './components/ChildComponent';
import EventClick from './components/EventClick';
import DataByHook from './components/DataByHook';
import ListRender from './components/ListRender';

function App() {
  return (
    <div className="App">
        <h1>Welcome React</h1>
        <SampleComponent/>
        <TemplateExpressions/>
        <ChildComponent/>
        <EventClick/>
        <img src='/instagram.png' alt='Image at Public Folder' />
        <img src={whatsappImg} alt='Image at Assets Folder' />
        <DataByHook/>
        <ListRender/>
    </div>
  );
}

export default App;
