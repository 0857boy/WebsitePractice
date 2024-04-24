/* 每隔隨機時間產生多顆星星位置(最多只有100個星星同時出現在螢幕上)，每顆星星閃爍完(非同步閃爍)就變換位置閃爍。*/


// 產生星星
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    document.body.appendChild(star);
    setTimeout(() => {
        star.remove();
    }, Math.random() * 30000 + 10000);
}

// 閃爍星星
function flickerStar() {
    const star = document.querySelectorAll('.star');
    star.forEach(s => {
        s.style.opacity = Math.random();
    });
}

// 產生星星
setInterval(() => {
    if (document.querySelectorAll('.star').length < 100) {
        createStar();
    }
}, 1000);

// 閃爍星星
setInterval(() => {
    flickerStar();
}, 2000);

// 變換位置閃爍
setInterval(() => {
    flickerStar();
}, 2000);


