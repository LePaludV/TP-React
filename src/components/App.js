import React,{useState} from 'react';
import Main from './Main';
import Footer from './Footer'
import Title from './Title';
import Form from './Form';
import dates from '../datas/dates.json'
const App = () => {

  const [concerts,setConcerts] = useState(dates);

  //const [nbrConcert, setNbrConcert] = useState(concerts.length);
  
  
  return (
    <div className="ui container">
      <Title concerts={concerts}></Title>
      <Form concerts={concerts} setConcerts={setConcerts} />
      <Main concerts={concerts} setConcerts={setConcerts} ></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
