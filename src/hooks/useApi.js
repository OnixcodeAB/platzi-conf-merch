import { useEffect, useState } from 'react';
import { fetchCountries, fetchStates } from '../utils/api';

const useGetCountry = () => {
  /* Initialize data */
  const [data, setData] = useState();

  /* Fetch data */
  useEffect(() => {
    fetchCountries().then((fetchCountries) => setData(fetchCountries));
  }, []);

  return { data };
};

/* Function to get States */


/*  */

const useGetState = () => {
  const [states, setStates] = useState();
  const [countryID, setCountryID] = useState();
  
   //const CID = getStateByCountryID ();
  //console.log(CID);

  /* Featch data */

  /* useEffect(() => {
    fetchStates().then((fetchStates) => setStates(fetchStates));
  }, [countryID]);
  return { states }; */
};

export { useGetCountry, useGetState, };
