import fetchAdvice from "./data";

// Show/hide spinner
export function toggleSpinner() {
  const spinner = document.querySelector(".spinner")! as HTMLDivElement;
  spinner.classList.toggle("d-none");
}

// Show/hide advice
export function toggleText() {
  const advice = document.querySelector("p")!;
  const adviceId = document.querySelector("#advice_id")!;
  [advice, adviceId].forEach((el) => el.classList.toggle("invisible"));
}

// Show new advice
export async function changeAdvice() {
  try {
    const data = await fetchAdvice();
    if (!data) throw new Error("Couldn't fetch advice");

    const advice = document.querySelector("p")!;
    const id = document.querySelector("h1")!;

    advice.textContent = data.slip.advice;
    id.textContent = `Advice #${data.slip.id}`;

    toggleSpinner();
    toggleText();
  } catch (err) {
    throw err;
  }
}
