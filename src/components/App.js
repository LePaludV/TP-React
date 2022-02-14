import React,{useState} from 'react';
import Main from './Main';
import Footer from './Footer'
import Title from './Title';
const App = () => {
  const [nbrConcert, setNbrConcert] = useState(0);
  return (
    <div className="ui container">
      <Title nbrConcert={nbrConcert}></Title>
      <Main nbrConcert={nbrConcert} setNbrConcert={setNbrConcert}></Main>
      <Footer></Footer>
    </div>
  );
};

export default App;
