import logo from './logo.svg';
import SampleComponent from './components/SampleComponent'

import './App.css';
import TemplateExpressions from './components/TemplateExpressions';
import ChildComponent from './components/ChildComponent';
import EventClick from './components/EventClick';

function App() {
  return (
    <div className="App">
        <h1>Welcome React</h1>
        <SampleComponent/>
        <TemplateExpressions/>
        <ChildComponent/>
        <EventClick/>
    </div>
  );
}

export default App;
