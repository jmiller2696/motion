// Create an object containing animated character data
const characterDataHorse = {
    arrImgs: ["runningn0001.png", "runningn0002.png",
        "runningn0003.png", "runningn0004.png", "runningn0005.png",
        "runningn0006.png", "runningn0007.png", "runningn0008.png"],
    poseNumber: 0,
    elem: document.querySelector("#horse"),
    screenWidth: window.width,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 0,
    y: 800,
    timerId: null,
    move : function() {
        if (this.y < 0) {
            characterDataHorse.y = this.screenHeight - 150;
        } else {
            this.y -= 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "images\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}

// Create an object containing animated character data
const characterDataLion = {
    arrImgs: ["lionrunnings0001.png", "lionrunnings0002.png",
        "lionrunnings0003.png", "lionrunnings0004.png", "lionrunnings0005.png",
        "lionrunnings0006.png", "lionrunnings0007.png", "lionrunnings0008.png"],
    poseNumber: 0,
    elem: document.querySelector("#lion"),
    screenWidth: window.width,
    screenHeight: document.querySelector("#park").scrollHeight,
    x: 200,
    y: 0,
    timerId: null,
    move : function() {
        if (this.y > this.screenHeight - 150) {
            characterDataLion.y = 0;
        } else {
            this.y += 5;
            this.elem.style.top = this.y + "px";
            this.elem.style.left = this.x + "px";
            this.elem.src =
                "images\\" + this.arrImgs[this.poseNumber];
            console.log(this.elem.src);
            this.poseNumber = (this.poseNumber + 1) % 8;
        }
    }

}

// Function called when the move it button is clicked
function move() {
    characterDataHorse.timerId = setInterval(frame, 100);
    characterDataLion.timerId = setInterval(frame, 100);
}

// Callback function to reset the image position
function frame() {
    characterDataHorse.move();
    characterDataLion.move();
}

// Function called when the stop button is clicked
function stopMoving() {
    clearInterval(characterDataHorse.timerId);
    clearInterval(characterDataLion.timerId);
}

/* You can add more characters and process the animation with an array */
const characters = [characterDataHorse, characterDataLion];
