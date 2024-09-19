function generatepoem(response){
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 50,
        cursor: "",
    });

}

function makepoem(event){
    event.preventDefault();
    
    let poeminput = document.querySelector("#poem-input")
    let apikey = `f4850684o25d3207eb4aa74t2073f600`;
    let prompt = `generate a Dari poem about ${poeminput.value}`;
    let context = "generate a diffirent poem each time in four lines and seperate each line with <br /> try to be polie. at the end include `SheCodes AI` between a <strong></ strong> element and don't sign";
    let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`
    axios.get(apiurl).then(generatepoem);

    new Typewriter("#poem", {
        strings: `Generating the poem...`,
        autoStart: true,
        delay: 50,
        cursor: "",
    });

}   
let submit = document.querySelector("#form");
submit.addEventListener("submit", makepoem);

