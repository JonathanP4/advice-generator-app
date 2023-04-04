const fetchAdvice = async function () {
  try {
    const dat = await fetch("https://api.adviceslip.com/advice");
    if (!dat.ok) throw new Error("Couldn't fetch");

    const res = await dat.json();
    return res;
  } catch (err) {
    console.error(err);
  }
};

export default fetchAdvice;
