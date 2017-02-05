export const connecter = (mqtt) => {
  return {
    type: 'CONNECTER',
    lien: mqtt
  }
};

export const ajouter = (sensor) => {
  return{
    type: 'AJOUTER',
    objet: sensor
  }
}

export const mettre_à_jour = () => {
  return{
    type: 'METTREÀJOUR'
  }
}
