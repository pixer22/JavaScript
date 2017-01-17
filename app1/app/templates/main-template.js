var arr = [
        '<a href="#"><img class="child_img" src="./img/001.jpg"></a>',
        '<a href="#"><img class="child_img" src="./img/002.jpg"></a>',
        '<a href="#"><img class="child_img" src="./img/003.jpg"></a>',
        '<a href="#"><img class="child_img" src="./img/004.jpg"></a>',
        '<a href="#"><img class="child_img" src="./img/005.jpg"></a>'
    ],
    sliderOffset = [],
    now = 0,
    startButton = document.getElementById("btn-slider-start"),
    stopButton = document.getElementById("btn-slider-stop"),
    speedValue = document.getElementById("btn-slider-speed"),
    zames, nextslide;
var delay = 3000;
addhtml();
function addhtml() {
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    arr.sort(compareRandom);
    var sliderDiv = document.getElementById('slider');
    var sortArr = arr;
    sliderDiv.innerHTML = sortArr;
}
for (var i = 0; i < arr.length; i++) sliderOffset.push(-i * 800 + 'px');
function right() {
    ++now;
    if (now > arr.length - 1) {
        now = 0;
    }
    document.getElementById('slider').style.left = sliderOffset[now];
}

startButton.onclick = function () {
    if (speedValue.value) {
        delay = speedValue.value * 1000;
    }
    let addDelay = delay * arr.length;
    zames = setInterval(addhtml, addDelay);
    nextslide = setInterval(right, delay);
};
stopButton.onclick = function () {
    clearInterval(zames);
    clearInterval(nextslide);
    addhtml();
};

