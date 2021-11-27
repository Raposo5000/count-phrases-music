const countPhrasesMusic = require("./index")
const fs = require("fs")

const lyrics = fs.readFileSync("./planeta de cores.txt", "utf8")

const phrases = countPhrasesMusic(lyrics)
console.log(phrases)