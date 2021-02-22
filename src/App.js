import logo from './logo.svg';
import './App.css';
import Example from './components/Example'
import HelloWorld from './components/HelloWorld'
import Greet from './components/Greet'
import Button from './components/Button'
import Button2 from './components/Button2'
import Card from './components/Card'

function App() {
  const user1 = {
    name: {
      first: 'John',
      last: 'Smith',
    },
    phone: '123-4567'
  }
  const user2 = {
    name: {
      first: 'Sarah',
      last: 'Haras',
    },
  }
  return (
    <div>
      <Example></Example>
      <HelloWorld />
      <Greet user={user1} user2={user2}/>
      <Button />
      <Button2 />
      <Card user={user1} user2={user2}/>
    </div>
  );
}

export default App;
