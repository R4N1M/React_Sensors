export const connecter = (mqtt) => {
  return {
    type: 'CONNECTER',
    lien: mqtt
  }
};
