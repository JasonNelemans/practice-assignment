import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyling from './GlobalStyling';
import DealsPage from './pages/DealsPage';

function App() {
  const [hotels, setHotels] = useState({});
  const [deals, setDeals] = useState({});

  async function fetchHotels() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://valkdigital-mock.netlify.com/api/v1/hotels'
    const res = await fetch(proxyUrl + targetUrl);
    res
      .json()
      .then(({ data }) => setHotels(data))
      .catch(err => console.log('error hotels: ', err))
  }

  async function fetchDeals() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://valkdigital-mock.netlify.com/api/v1/deals';
    const res = await fetch(proxyUrl + targetUrl);
    res
      .json()
      .then(({ data }) => setDeals(data))
      .catch(err => console.log('error hotels: ', err));
  }

  useEffect(() => {
    fetchHotels();
    fetchDeals();
  }, [])

  return (
    <div className="App">
      <GlobalStyling />
      <Switch>
        <Route exact path='/' render={props => <DealsPage {...props} deals={deals} />} />
      </Switch>
    </div>
  );
}

export default App;
