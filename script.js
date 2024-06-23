function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }


function poemGenerate(event) {
    event.preventDefault();

    let userInput = document.querySelector("#user-input");
    let apiKey = "bf8f1010b3c486eaa378at4e5eo24f84";
    let prompt = `User Input: Generate an Israeli poem about ${userInput.value}`;
    let context = "You are a peaceful poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user input. Sign the poem at the end with <strong>SheCodes AI</strong>";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generate"> 🔎 Generating a Short Poem about ${userInput.value}</div>`;


    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", poemGenerate);

