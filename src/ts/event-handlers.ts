import fetchAdvice from "./data";

// Show/hide spinner
export function toggleSpinner() {
  const spinner = document.querySelector(".spinner")! as HTMLDivElement;
  spinner.classList.toggle("d-none");
}

// Show/hide advice
export function toggleText() {
  const advice = document.querySelector("p")!;
  advice.classList.toggle("invisible");
}

// Show new advice
export async function changeAdvice() {
  const data = await fetchAdvice();

  const advice = document.querySelector("p")!;
  const id = document.querySelector("h1")!;

  advice.textContent = data.slip.advice;
  id.textContent = `Advice #${data.slip.id}`;

  toggleSpinner();
  toggleText();
}
