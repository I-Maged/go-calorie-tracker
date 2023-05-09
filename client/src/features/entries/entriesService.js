import axios from 'axios';

const API_URL = 'http://localhost:8080/';

const createEntry = async (entryData) => {
  const response = await axios.post(`${API_URL}entry/create`, entryData);

  return response.data;
};

const getAllEntries = async () => {
  const response = await axios.get(`${API_URL}entries/`, {
    reponseType: 'json',
  });

  return response.data;
};

const updateEntry = async (id, newEntryData) => {
  const response = await axios.put(
    `${API_URL}entry/update/${id}`,
    newEntryData
  );

  return response.data;
};

const changeIngredient = async (id, newIngredient) => {
  const response = await axios.put(`${API_URL}ingredient/update/${id}`, {
    ingredients: newIngredient,
  });

  return response.data;
};

const deleteEntry = async (id) => {
  const response = await axios.delete(`${API_URL}entry/${id}`, {
    reponseType: 'json',
  });
  return response.data;
};

const entriesService = {
  createEntry,
  getAllEntries,
  updateEntry,
  changeIngredient,
  deleteEntry,
};

export default entriesService;
