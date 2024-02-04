const nombreRegEx = /^(?!\s)[a-zA-Z\s]{3,50}(?<!\s)$/;
const sintomasRegEx = /^[a-zA-Z\s.,!?¿¡()-]{3,100}$/;

export const validarNombre = texto => nombreRegEx.test(texto);
export const validarSintomas = texto => sintomasRegEx.test(texto);