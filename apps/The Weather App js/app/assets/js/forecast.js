'use:strict';

/****************************************
 *            <code>                     *
 *****************************************/
/* add your API KEY here  */
const key = '';

/**
 * get weather information
 * @param {*} location id
 *
 * @return array
 */
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
  const query = `${id}?apikey=${key}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

/**
 * get city and key informations
 * @param {*} city
 *
 * @return array
 */
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
  const query = `?apikey=${key}&q=${city}`;

  const response = await fetch(base + query);
  const data = await response.json();

  return data[0];
};

/**
 * chaining together with return keyword
 */

getCity('lyon')
  .then((data) => {
    return getWeather(data.Key);
  })
  .then((data) => {
    //console.log(data);
  })
  .catch((err) => console.log(err));
