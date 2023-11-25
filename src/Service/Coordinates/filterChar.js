const filterChar = (city) => {
  try {
    if (city === undefined) {
      return;
    }
    const specialChars = {
      ç: 'c',
      ã: 'a',
      õ: 'o',
      á: 'a',
      â: 'a',
      é: 'e',
      ê: 'e',
      í: 'i',
      ó: 'o',
      ô: 'o',
      ú: 'u',
      ' ': '%20',
    };

    const chaveRegex = new RegExp(`[${Object.keys(specialChars).join('')}]`, 'g');

    const filteredCity = city.replace(chaveRegex, (match) => specialChars[match.toLowerCase()]);

    return filteredCity.toLowerCase();
  } catch {
    throw new Error('Erro ao filtrar caracteres');
  }
};

module.exports = { filterChar };
