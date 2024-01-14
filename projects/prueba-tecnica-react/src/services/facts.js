export const RANDOM_POST = "https://catfact.ninja/fact";
export const IMAGE_CAT = (word) => `https://cataas.com/cat/says/${word}`;

export const getFact = async () => {
  const res = await fetch(RANDOM_POST);
  const data = await res.json();
  const { fact } = data;
  return fact;
};

export const getUrlCat = async (words) => {
  const firstsWord = words.split(" ", 3).join(" ");
  const res = await fetch(IMAGE_CAT(firstsWord));
  const { url } = res;
  return url;
};
