const countPhrasesMusic = require("./index")

const lyrics = `Mas não vê
Que o amor não se esconde
Mesmo em silêncio
Pode se ouvir ao longe
Não se foge
Não se pode negar o amor
Só entregar-se
A esse planeta de cores`

const phrases = countPhrasesMusic(lyrics)
console.log(phrases)