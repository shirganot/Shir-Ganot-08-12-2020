export const emailValidation = /\S+@\S+\.\S+/;
export const composeEmailErrStr = Object.freeze({
  required: 'This field is required',
  pattern: 'The email is not valid',
});
