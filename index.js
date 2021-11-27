module.exports = function (lyrics) {
  const phrases = String(lyrics)
    .toLocaleLowerCase()
    .split("\n")
    .filter((frase) => frase.trim() !== "");

  const repetedPhrases = [...new Set(phrases)];
  
  return {
    allPhrases: phrases,
    phrasesLength: phrases.length,
    repetedPhrases: repetedPhrases,
    repetedPhrasesLength: repetedPhrases.length,
  };
};
