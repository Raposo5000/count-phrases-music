# count-phrases-music

Counts repeated phrases and phrases from the lyrics of a song.

## install

install with npm using command `npm i count-phrases-music`

## usage

```javascript
const countPhrasesMusic = require("./index")

const lyrics = `
Mas não vê
Que o amor não se esconde
Mesmo em silêncio
Pode se ouvir ao longe
Não se foge
Não se pode negar o amor
Só entregar-se
A esse planeta de cores`

const phrases = countPhrasesMusic(lyrics)
console.log(phrases)
```