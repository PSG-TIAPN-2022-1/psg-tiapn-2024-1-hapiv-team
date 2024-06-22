export const verificarSeElementoEhNulo = (a) => {
  return a === null || a === undefined || a === "" || a.length === 0;
};

export const verificarSeElementoEhMenor = (a, b) => {
  return a.length < b;
};

export const compararElementos = (a, b) => {
  return a === b;
};

export const formatarMaiusculo = (a) => {
  return a.toUpperCase();
};

export const formatarDecimal = (a) => {
  return parseFloat(a).toFixed(2);
};

export const verificarSeEhNumeroMaiorQueZero = (a) => {
  return a > 0;
};
