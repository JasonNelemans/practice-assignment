import React, { useEffect, useState } from 'react';

function App() {

  async function fetchHotels() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'https://valkdigital-mock.netlify.com/api/v1/hotels'
    const res = await fetch(proxyUrl + targetUrl);
    res
      .json()
      .then(({ data }) => console.log('response hotels: ', data))
      .catch(err => console.log('error hotels: ', err))
  }

  useEffect(() => {
    fetchHotels();
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
