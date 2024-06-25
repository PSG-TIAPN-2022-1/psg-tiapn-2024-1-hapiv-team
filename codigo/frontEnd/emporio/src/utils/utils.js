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

export const verificarSeEhNumero = (a) => {
  return !isNaN(a);
};

export const verificarSeEhPositivo = (a) => {
  return verificarSeEhNumero(a) && a > 0.0;
};
