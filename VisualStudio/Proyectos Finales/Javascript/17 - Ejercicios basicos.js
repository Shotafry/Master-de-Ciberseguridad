const alien = {
  name: 'Xenomorph',
  species: 'Xenomorph XX121',
  origin: 'Unknown',
  weight: 180
}
for (const xeno in alien) {
  console.log('La propiedad ' + xeno + ' tiene como valor: ' + alien[xeno])
}
