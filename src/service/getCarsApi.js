import axios from 'axios';

const carsInstance = axios.create({
  baseURL: 'https://661f772216358961cd94639f.mockapi.io',
});

export const fetchAllCars = async () => {
  const { data } = await carsInstance.get(`/advert`);
  console.log(data);
  return data;
};

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
// fetchCarsId();

export const fetchCarsFilter = async filter => {
  const { data } = await carsInstance.get(`/advert?filter=${filter}`);
  console.log(data);
  return data;
};
// fetchCarsLocation();
