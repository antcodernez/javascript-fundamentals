/*
    for of arrays, strings [something]
*/

const consoles = [
    "Nintendo Entertainment System (NES)",
    "Super Nintendo Entertainment System (SNES)",
    "Nintendo 64",
    "GameCube",
    "Wii",
    "Wii U",
    "Nintendo Switch",
    "PlayStation",
    "PlayStation 2",
    "PlayStation 3",
    "PlayStation 4",
    "PlayStation 5",
    "Xbox",
    "Xbox 360",
    "Xbox One",
    "Xbox Series X",
    "Xbox Series S",
    "Sega Genesis",
    "Sega Saturn",
    "Dreamcast",
    "Game Boy",
    "Game Boy Color",
    "Game Boy Advance",
    "Nintendo DS",
    "Nintendo 3DS",
    "PlayStation Portable (PSP)",
    "PlayStation Vita",
    "Atari 2600"
  ];

const pazExcerpt = `Un sauce de cristal, un chopo de agua, 
  un alto surtidor que el viento arquea, 
  un árbol bien plantado mas danzante, 
  un caminar de río que se curva, 
  avanza, retrocede, da un rodeo 
  y llega siempre.`;
  
for (let con in consoles) {
    console.log(con); // return the index from the data in the iterable object
}