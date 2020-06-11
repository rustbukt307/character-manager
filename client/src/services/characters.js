import api from './api-helper';

export const getAllCharacters = async () => {
  const resp = await api.get('/characters');
  return resp.data;
}