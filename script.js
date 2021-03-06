const plain = document.querySelector('.plain')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')
const el = document.querySelector('.el')

plain.style.width = '110px';
plain.style.height = '110px';
let count = 110;
let rise = true;
let stopAnimation = true;
let max;
let min;

const funcRandomize = function() {
    let r;
    r = Math.round(Math.random() * 100) * 5 + 110;
    return r;
}

max = funcRandomize();
min = funcRandomize();

const anime = () => {
    while (max < min) {
        min = funcRandomize();
    }
    console.log(max)
    console.log(min)
    let myReqAniFrm = requestAnimationFrame(anime);
    if (rise) {
        count = count + 5;
        if (count >= max) {
            rise = false;
            max = funcRandomize();
        } else {
            plain.style.width = count + 'px';
            plain.style.height = count + 'px';
            if (count > 300) {
                el.style.display = 'block'
            }
        }
    } else {
        count = count - 5;
        if (count <= min) {
            rise = true;
            min = funcRandomize();
        } else {
            plain.style.width = count + 'px';
            plain.style.height = count + 'px';
            if (count < 300) {
                el.style.display = 'none'
            }
        }
    }
    if (stopAnimation) {
        cancelAnimationFrame(myReqAniFrm)
    }
}

stop.addEventListener('click', () => {
    stopAnimation = !stopAnimation;
    if (!stopAnimation) {
        anime()
    }
})

reset.addEventListener('click', () => {
    stopAnimation = true;
    count = 110;
    plain.style.width = count + 'px';
    plain.style.height = count + 'px';
    rise = true;
    max = funcRandomize();
    min = funcRandomize();
    el.style.display = 'none'
})

