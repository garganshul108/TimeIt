console.log("TimeIt Extension Active");


const timerElement = `
<style>
    .timeit-timerContainer {
        text-align: center;
        position:fixed;
        z-index:1000000000;
        bottom: 50px;
        right : 10px;
    }
    .timeit-timer {
        color: black ;
        background: white ;
        padding: 5px 10px  ;
        border: 2px solid ;
        border-radius: 10px  ;
        text-align: center  ;
        cursor: pointer  ;
        outline: blue ;
        opacity:0.4 ;
    }
    .timeit-timerElement{
        font-weight: 900;
        font-size: 50px;
    }
    .timeit-timer:hover {
        opacity:1 ;
    }
</style>
<div class="timeit-timerContainer">
    <button class="timeit-timer">
        <span class="timeit-timerElement" id="timeit-hrs">00</span>
        <span class="timeit-timerElement">:</span>
        <span class="timeit-timerElement" id="timeit-mins">00</span>
        <span class="timeit-timerElement">:</span>
        <span class="timeit-timerElement" id="timeit-secs">00</span>
        <span style="display:block;">Click to Reset</span>
    </button>
</div>
`;



function formatTime(a) {
    a = a.toString();
    if (a.length < 2) {
        a = "0" + a;
    }

    return a;
}

let startTime = 0;

function resetStartTime() {
    // console.log("startTimeSet");
    startTime = new Date().getTime();
}

function changeTime() {
    // console.log("now time set");
    let now = new Date().getTime();
    let diff = now - startTime;
    diff = diff / 1000;
    let h = Math.floor(diff / (60 * 60));
    let m = Math.floor((diff - h * (60 * 60)) / 60);
    let s = Math.floor(diff - m * 60);
    h = formatTime(h);
    m = formatTime(m);
    s = formatTime(s);
    document.getElementById("timeit-hrs").innerHTML = h;
    document.getElementById("timeit-mins").innerHTML = m;
    document.getElementById("timeit-secs").innerHTML = s;
}

function waitForPageReload() {
    console.log("internal script running");
    const target = document.getElementsByTagName('body')[0];
    target.innerHTML = target.innerHTML + timerElement;
    document.getElementsByClassName('timeit-timer')[0].addEventListener("click", resetStartTime);
    resetStartTime();
    setInterval(changeTime, 1000);

}

setTimeout(waitForPageReload, 3000);