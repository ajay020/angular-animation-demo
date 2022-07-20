import { animate, animateChild,
    animation, group, keyframes, 
    query, stagger, state, style, transition, trigger, 
    useAnimation } from '@angular/animations';

export const expandCollapse =  trigger("expandCollapse",[
    state("collapsed", style({
        height: 0,
        paddingTop:0,
        paddingBottom:0,
        opacity:0
    })),
    // state("expanded", style({
    //     height: '*',
    //     padding:'auto',
    //     overflow:"auto" 
    // })),
    transition('collapsed => expanded', [
        animate('300ms ease-out', style({
            height:'*',
            paddingTop:'*',
            paddingBottom:'*' ,
        })),
        animate("1s", style({opacity:1}))
    ]),
    transition('expanded => collapsed', [
        animate('300ms ease-out')
    ])
])