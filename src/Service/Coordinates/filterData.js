function filterData(result) {
  try {
    const {
      name, state, country, lat, lon,
    } = result;
    return {
      name, state, country, lat, lon,
    };
  } catch {
    throw new Error('erro no filter');
  }
}

module.exports = { filterData };
