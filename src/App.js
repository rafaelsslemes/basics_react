import whatsappImg from './assets/whatsapp.png';
import SampleComponent from './components/SampleComponent'


import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import ChildComponent from './components/ChildComponent';
import EventClick from './components/EventClick';
import DataByHook from './components/DataByHook';
import ListRender from './components/ListRender';
import CondictionalRender from './components/CondictionalRender';
import ReceiveProperties from './components/ReceiveProperties';
import DestructProperties from './components/DestructProperties';
import ListIterated from './components/ListIterated';
import FragmentExample from './components/FragmentExample';
import WrapComponent from './components/WrapComponent';

function App() {

  const employees = [
    {name:'Josh', age: 25, title: "Developer Jr"},
    {name:'Amanda', age: 30, title: "Developer Pl"},
    {name:'Judith', age: 35, title: "Developer Sr"},
  ];

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
        <CondictionalRender/>
        <ReceiveProperties name='Peter'/>
        <DestructProperties name='John' age={30} title='Software Architect'/>
        <DestructProperties name='Tomas' age={40} title='Software Developer'/>
        <ListIterated people={employees}/>
        <FragmentExample/>
        <WrapComponent>
          <h2>Information 1</h2>
          <h2>Information 2</h2>
        </WrapComponent>
    </div>
  );
}

export default App;
