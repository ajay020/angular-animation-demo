import { animate, animation, keyframes, state, style, transition, trigger, useAnimation } from '@angular/animations';


export const bounceOutLeftAnimation = animation(
    animate('0.5s ease-in', keyframes([
    style({
        offset: .2,
        opacity: 1,
        transform: "translateX(25px)"
    }),
    style({
        offset: 1,
        opacity: 0,
        transform: "translateX(-100%)"
    }),
])))

export const fadeInAnimation = animation([
    style({opacity: 0}),
    animate("{{duration}} {{easing}}")
],{
    params:{
        duration:'2s',
        easing:'ease-out'
    }
})

export const fade =  trigger('fade', [
    transition(':enter', useAnimation(fadeInAnimation)),
    transition(':leave', [
        animate(2000, style({opacity: 0}))
    ])
]);

export const slide = trigger('slide', [
    state('void', style({transform: "translateX(-20px)" })),
    transition(":enter", [
        animate(500)
    ]),
    transition (":leave",  useAnimation(bounceOutLeftAnimation))
]);