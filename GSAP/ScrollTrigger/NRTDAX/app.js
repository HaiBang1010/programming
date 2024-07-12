const text = document.querySelector(".text p");

text.innerHTML = text.innerHTML
    .split("")
    .map((char, i) => {
        return `<span style="transform: rotate(${i * 10}deg)">${char}</span>`;
    })
    .join("");

const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const num3 = document.querySelector(".num3");

const CounterUpAnimation = (number, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) {
            startTimestamp = timestamp;
        }

        let prograss = Math.min((timestamp - startTimestamp) / duration, 1);

        number.innerHTML = Math.floor(prograss * (end - start) + start) + "k+";

        if (prograss < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const navbar = document.querySelector(".nav-bar");

gsap.from(navbar.children, {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: {
        amount: 0.4,
    },
});

gsap.from(".side-one h1", {
    x: -200,
    skewX: 65,
    opacity: 0,
    duration: 1,
    delay: 1,
    stagger: {
        amount: 0.4,
    },
});

gsap.from(".skew", {
    duration: 1,
    delay: 0.5,
    opacity: 0,
    y: 50,
    stagger: {
        amount: 0.4,
    },
});

gsap.from(".statistic", {
    delay: 2,
    autoAlpha: 0,
    stagger: 0.1,
});

gsap.fromTo(
    ".circle-text",
    {
        opacity: 0,
        scale: 0,
        rotation: 400,
    },
    {
        duration: 1,
        delay: 2,
        opacity: 1,
        scale: 1,
        rotation: 0,
    }
);

setTimeout(() => {
    CounterUpAnimation(num1, 0, 100, 5000);
    CounterUpAnimation(num2, 0, 32, 2000);
    CounterUpAnimation(num3, 0, 50, 3000);
}, 1000);
