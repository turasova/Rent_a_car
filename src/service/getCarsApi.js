import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://661f772216358961cd94639f.mockapi.io',
});

export const fetchCars = async ({ page, limit }) => {
  const { data } = await carsInstance.get(
    `/advert?page=${page}&limit=${limit}`
  );
  console.log(data);
  return data;
};
export const fetchCarsId = async _id => {
  const { data } = await carsInstance.get(`/advert?id=${_id}`);
  console.log(data);
  return data;
};
fetchCarsId();

export const fetchCarsLocation = async location => {
  const { data } = await carsInstance.get(`/advert?location=${location}`);
  console.log(data);
  return data;
};
fetchCarsLocation();
