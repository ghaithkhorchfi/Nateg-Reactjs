import React from 'react';

const Count = () => {
    const countDate = new Date("Feb 13,2022 00:00:00").getTime();
    const now = new Date();
    const gap = countDate - now;
    const sec = 1000;
    const min = 60 * 1000;
    const hour = 60 * 60 * 1000;
    const day = 24 * 60 * 60 * 1000;
    const textday = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMin = Math.floor((gap % hour) / min);
    const textSec = Math.floor((gap % min) / sec);
    document.querySelector(".day").innerHTML = textday;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".min").innerHTML = textMin;
    document.querySelector(".sec").innerHTML = textSec;
};

export default Count;
