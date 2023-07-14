import { getAnimalsTransform } from './animals.transform';

const API_URL =
  'https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries';

export const getAnimals = async (params = { per_page: 8 }) => {
  try {
    let dataTransform = [];
    const response = await fetch(`${API_URL}?${new URLSearchParams(params)}`);
    const data = await response.json();

    if (response.ok) {
      dataTransform = getAnimalsTransform(data?.entries);
    }

    return { data: dataTransform, problem: null };
  } catch (error) {
    return { data: [], problem: error };
  }
};
