module.exports = function (lyrics) {
  const phrases = String(lyrics)
    .toLocaleLowerCase()
    .split("\n")
    .filter((phrase) => phrase.trim() !== "");

  const uniquePhrases = [...new Set(phrases)];

  const notRepetedPhrases = uniquePhrases.filter((phrase) => {
    const count = phrases.filter((p) => p === phrase).length;
    return count === 1;
  });

  const repetedPhrases = [
    ...new Set(
      phrases.filter((phrase) => {
        const count = phrases.filter((p) => p === phrase).length;
        return count > 1;
      })
    ),
  ];

  return {
    uniquePhrases,
    notRepetedPhrases,
    repetedPhrases,
  };
};
