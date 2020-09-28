import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyling from './GlobalStyling';
import DealsDetailPage from './pages/DealsDetailPage';
import DealsPage from './pages/DealsPage';
import hotelsData from './data/hotels';
import dealsData from './data/deals';

function App() {
  const [hotels, setHotels] = useState({});
  const [deals, setDeals] = useState({});

  async function fetchHotels() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://valkdigital-mock.netlify.com/api/v1/hotels'
    const res = await fetch(proxyUrl + targetUrl);
    res
      .json()
      .then((res) => setHotels(res))
      .catch(err => console.log('error hotels: ', err))
  }

  async function fetchDeals() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const targetUrl = 'https://valkdigital-mock.netlify.com/api/v1/deals';
    const res = await fetch(proxyUrl + targetUrl);
    res
      .json()
      .then((res) => setDeals(res))
      .catch(err => console.log('error hotels: ', err));
  }

  useEffect(() => {
    // fetchHotels();
    // fetchDeals();
    setDeals(dealsData);
    setHotels(hotelsData);

  }, [])

  return (
    <div className="App">
      <GlobalStyling />
      <Switch>
        <Route exact path='/' render={props => <DealsPage {...props} deals={deals} />} />
        <Route exact path='/deal/:id' render={props => <DealsDetailPage {...props} deals={deals} hotels={hotels} />} />
      </Switch>
    </div>
  );
}

export default App;
