import { useState } from 'react';
import './App.css';
import ResultItems from './components/resultItems/resultItems.tsx';
import Searchbox from './components/searchbox/searchbox.tsx'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [results, setResults] = useState([]);

  const onChange = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm)
  }

  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      handleSubmit();
    }
  }

  const handleSubmit = () => {
    if (searchTerm === '') {
      setErrorMsg('Ethereum Address can not be empty');
      setResults([]);
    } else {
      setErrorMsg('');
      fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${searchTerm}&startblock=0&endblock=99999999&page=1&offset=10000&sort=asc&apikey=QRRUCDMKGR9Q7RAMPYD5B8KW28RRT5F7VT`)
        .then((resp) => resp.json())
        .then((results) => {
          if (results.message === 'NOTOK') {
            setErrorMsg(results.result);
            setResults([]);
          } else {
            setResults(results)
          }
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          <img src='https://www.gk8.io/wp-content/uploads/2021/04/6-layers-4.svg' alt='gk8' />
          FE Home Assignment
        </h2>
      </header>
      <div className='searchContainer'>
        <p>Please insert a valid Ethereum address</p>
        <Searchbox submitHandler={handleSubmit} onChangeHandler={onChange} errorMsg={errorMsg} onKeyPress={handleEnter} />
      </div>
      <ResultItems results={results.result} message={results.message} />
    </div>
  );
}

export default App;
