export const typesColors = {
  normal: 'light',
  fighting: 'danger',
  flying: 'indigo',
  poison: 'violet',
  ground: 'amber',
  rock: 'amber',
  bug: 'lime',
  ghost: 'violet',
  steel: 'trueGray',
  fire: 'red',
  water: 'blue',
  grass: 'green',
  electric: 'yellow',
  psychic: 'pink',
  ice: 'lightBlue',
  dragon: 'purple',
  dark: 'dark',
  fairy: 'pink',
  unknown: 'gray',
  shadow: 'dark',
};

export const getTypeColor = (type: string) => {
  return typesColors[type as keyof typeof typesColors] || 'light';
};

// Removes all escape characters from a string
export const removeEscapeCharacters = (str: string): string =>
  str.replace(/[\n\r\t\f]/g, '');

export const filterString = (text: string) => {
  // Check if the text has a hyphen
  if (text.includes('-')) {
    // Split the text into parts based on the hyphen
    const parts = text.split('-');
    // Take the first two characters of the first part, the hyphen, and the first character of the second part
    return `${parts[0].substring(0, 3)}-${parts[1][0]}`;
  } else {
    // If there's no hyphen, simply take the first three characters
    return text.substring(0, 3);
  }
};
