export const verificarSeElementoEhNulo = (a) => {
  return a === null || a === undefined || a === "";
};

export const verificarSeElementoEhMenor = (a, b) => {
  return a.length < b;
};

export const compararElementos = (a, b) => {
  return a === b;
};
