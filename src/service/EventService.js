import apiConfig from '@/config/AxiosConfig.js';

export const getAllEvents = async () => {
  const response = await apiConfig.get('/events');
  return response;
};

export const getEventDetails = async (id) => {
  console.log('Event id: ', id);
  const response = await apiConfig.get('/events/1');
  return response;
};
