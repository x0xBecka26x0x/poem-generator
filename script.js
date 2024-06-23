function poemGenerate(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Never let go of your dreams...",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    }



let poemFormElement = document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", poemGenerate);

