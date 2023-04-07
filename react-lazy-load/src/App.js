import {faker} from '@faker-js/faker'
import './App.css';
import LazyNASA from './LazyNASA';

function App() {

  const data = new Array(20).fill().map((value, index) => ({
    id: index,
    name: faker.name.firstName(5),
    body: faker.lorem.paragraph(8),
  }));

  return (
    <div className="App">
      {
        data.map((d,i) => {
          return (
            <div className="post" key={d.id}>
              <h3>{`${d.name} - ${d.id}`}</h3>
              <p>{d.body}</p>
            </div>
          )
        })
      }
      <LazyNASA />
    </div>
  );
}

export default App;
