document.addEventListener("keydown", function (event) {
    if (event.code == "KeyA" || event.code == "KeyS" || event.code == "KeyD" || event.code == "KeyF" || event.code == "KeyG" || event.code == "KeyH" || event.code == "KeyJ" || event.code == "KeyW" || event.code == "KeyE" || event.code == "KeyT" || event.code == "KeyY" || event.code == "KeyU") {

        playNote(event.key);
    } else
        console.log("Incorrect key")

})
document.querySelectorAll("kbd").forEach(x => {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        x.addEventListener("touchend", function(){playNote(x.textContent)},false)
    }
    else
    x.addEventListener("click", function(){playNote(x.textContent)},false)
})

function playNote(key) {
    console.log(key);
    let sound = new Howl({
        src: ["audio/" + key.toUpperCase() + ".mp3"]
    });
    sound.play();
    /*let audio = new Audio("audio/" + key.toUpperCase() + ".mp3");
    audio.play();*/
}
