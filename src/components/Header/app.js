import React from 'react';

export const jsfunct = () => {

      
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
return (tl.to(".typicalText", { y: "100", duration: 1, stagger: 0.25 }),
tl.to(".aboutText", { y: "-100%", duration: 1.5, delay: 0.5 }),
tl.to(".btn btn-one", { y: "-100%", duration: 1 }, "-=1"),
tl.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1 }),


tl.from(".section_two", {opacity: 0, duration: 1, x: "100%", stagger:0.6, ease: 'Power2.easeInOut'}),
tl.from(".big-text", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'}),
tl.from(".section_one", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'}),
tl.from(".btn-signin", {opacity: 0, duration: 1, y: "100%", stagger:0.6, ease: 'Power2.easeInOut'}));





};
