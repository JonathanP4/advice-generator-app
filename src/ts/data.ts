const fetchAdvice = async function () {
  const dat = await fetch("https://api.adviceslip.com/advice");
  const res = await dat.json();
  return res;
};

export default fetchAdvice;
