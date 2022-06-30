var speed = 200;

var message = ["I'm a software engineer."];
var textPos = 0;

const typewriterJob =  async () => {
    await new Promise(r => setTimeout(r, 1150));
    //Helper contains main logic for typewriter
    const typewriterJobHelper = () => {

        document.querySelector("#typewriterJob").innerHTML = message[0].substring(0, textPos);
        if (textPos++ != message[0].length) {
        setTimeout(typewriterJobHelper, speed)
        }
    }
    typewriterJobHelper();

}

window.addEventListener("load", typewriterJob);


