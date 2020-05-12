
import React from 'react';
import Putting from './components/putting';
import './App.css';

const people = [
  {
    firstName: 'Doe',
    lastName: 'Jane',
    hairColor: 'Black',
    age: 45
  },
  {
    firstName: 'Smith',
    lastName: 'Jhon',
    hairColor: 'Brown',
    age: 88

  }
];

function App() {
  return (
    <div className="App">
      {/*<Putting 
        firstName="Doe"
        lastName="Jane"
        age={45} 
        hairColor=  "Black"
      
      />
      <Putting
        firstName="Smith"
        lastName="John"
        age={88} 
        hairColor="Brown"
      />*/}
     
      {people.map((person, i)=>(
        <Putting
          key={i}
          {...person}

          />

      ))}
     
    </div>
  );
}

export default App;