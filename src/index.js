function generatepoem(event){
    event.preventDefault();
    new Typewriter("#poem", {
        strings: "Mejor que todos los fuegos <br> que llaman artificiales",
        autoStart: true,
        delay: 7,
        cursor: "",
    });

}
let submit = document.querySelector("#form");
submit.addEventListener("click", generatepoem);