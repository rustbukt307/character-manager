import api from './api-helper';

export const getAllCharacters = async () => {
  const resp = await api.get('/characters');
  return resp.data;
}

export const getOneCharacter = async (id) => {
  const resp = await api.get(`/characters/${id}`);
  return resp.data;
}