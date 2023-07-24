import { useState } from 'react';

/* Fecth Conutry */
export const fetchCountries = () =>
  fetch('https://restcountries.com/v3.1/region/ame').then((response) =>
    response.json().then((data) => {
      return data;
    })
  );

/* Fetch States by country selected */

export const fetchStates = (countryID) => {
  const API_KEY = process.env.API_KEY;
  //console.log(API_KEY);
  const url = `https://api.countrystatecity.in/v1/countries/${countryID}/states`;
  //console.log(url);

  const requestOptions = {
    method: 'GET',
    headers: {
      'X-CSCAPI-KEY': API_KEY,
    },
    redirect: 'follow',
  };

  return new Promise((resolve, reject) => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log('error', error);
        reject(error);
      });
  });
};

export const fetchCoordinates = ({
  street,
  city,
  state,
  postalCode,
  country,
}) => {
  const url = `https://geocode.maps.co/search?street=${street}&city=${city}&state=${state}&postalcode=${postalCode}&country=${country}`;

  const requestOptions = {
    method: 'Get',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  return new Promise((resolve, reject) => {
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log('error', error);
        reject(error);
      });
  });
};
