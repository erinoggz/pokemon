import {BASE_URL} from '../../constants/data';

export async function fetchFn(endpoint: string) {
  const response = await fetch(endpoint);
  return response.json();
}

export async function fetchPokemon({pageParam}: {pageParam?: string}) {
  try {
    const response = await fetch(pageParam || BASE_URL);
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

export async function searchPokemon(name: string) {
  try {
    const response = await fetch(`${BASE_URL}${name}`);

    return response.json();
  } catch (error) {
    console.log(error);
    throw new Error(`${name} not found`);
  }
}
