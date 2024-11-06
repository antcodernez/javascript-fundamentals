const fruits = [
    "Manzana",
    "Plátano",
    "Naranja",
    "Fresa",
    "Mango",
    "Uva",
    "Piña",
    "Sandía",
    "Melón",
    "Cereza",
    "Papaya",
    "Durazno",
    "Kiwi",
    "Pera",
    "Frambuesa"
  ];

for (const fruit of fruits) {
    console.log(fruit);
}
const poemMoctezuma = `
  Somos mortales, todos tendremos que irnos,
  todos tendremos que morir en la tierra...
  Como una pintura, todos iremos borrando.
  Como una flor, nos iremos secando
  aquí sobre la tierra.

  Meditadlo, señores, águilas y jaguares,
  aunque fuerais de jade, aunque fuerais de oro,
  también allá iréis, al lugar de los descarnados.
  Tendremos que desaparecer, nadie habrá de quedar.
`;

const words = poemMoctezuma.split(/\s+/); // separa el texto caundo hay un texto en blanco
// Cuando split separa un texto lo convierte en un array

for (const letter of words) {
    console.log(letter);   
}