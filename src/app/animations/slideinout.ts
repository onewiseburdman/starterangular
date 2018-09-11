import { trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '100vh', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('0ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('0ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('0ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('0ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('0ms ease-in-out', style({
                'max-height': '100vh'
            })),
            animate('0ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
];
export const SidenavAnimation = [
    trigger('sideInOut', [
        state('in', style({
            'width': '20vw', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'width': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('0ms ease-in-out', style({
                'opacity': '0', 'width': '0px', 'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('0ms ease-in-out', style({
                'visibility': 'visible','width': '20vw','opacity': '1'
            }))
        ]
        )])
    ]),
];
