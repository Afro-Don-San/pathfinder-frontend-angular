import { animate, query, style, transition, trigger, stagger, sequence, state, group, animation } from '@angular/animations';
import { AnimationsService } from './animations.service';
export var ROUTE_ANIMATIONS_ELEMENTS = 'route-animations-elements';
var STEPS_ALL = [
    query(':enter > *', style({ opacity: 0, position: 'fixed' }), {
        optional: true
    }),
    query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, style({ opacity: 0 }), {
        optional: true
    }),
    sequence([
        query(':leave > *', [
            style({ transform: 'translateY(0%)', opacity: 1 }),
            animate('0.2s ease-in-out', style({ transform: 'translateY(-3%)', opacity: 0 })),
            style({ position: 'fixed' })
        ], { optional: true }),
        query(':enter > *', [
            style({
                transform: 'translateY(-3%)',
                opacity: 0,
                position: 'static'
            }),
            animate('0.4s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ], { optional: true })
    ]),
    query(':enter .' + ROUTE_ANIMATIONS_ELEMENTS, stagger(100, [
        style({ transform: 'translateY(15%)', opacity: 0 }),
        animate('0.4s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
    ]), { optional: true })
];
var STEPS_NONE = [];
var STEPS_PAGE = [STEPS_ALL[0], STEPS_ALL[2]];
var STEPS_ELEMENTS = [STEPS_ALL[1], STEPS_ALL[3]];
export var routeAnimations = trigger('routeAnimations', [
    transition(isRouteAnimationsAll, STEPS_ALL),
    transition(isRouteAnimationsNone, STEPS_NONE),
    transition(isRouteAnimationsPage, STEPS_PAGE),
    transition(isRouteAnimationsElements, STEPS_ELEMENTS)
]);
export function isRouteAnimationsAll() {
    return AnimationsService.isRouteAnimationsType('ALL');
}
export function isRouteAnimationsNone() {
    return AnimationsService.isRouteAnimationsType('NONE');
}
export function isRouteAnimationsPage() {
    return AnimationsService.isRouteAnimationsType('PAGE');
}
export function isRouteAnimationsElements() {
    return AnimationsService.isRouteAnimationsType('ELEMENTS');
}
export var fadeIn = trigger('fadeIn', [
    state('void', style({ transform: 'translateY(15%)', opacity: 0 })),
    transition(':enter', animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 })))
]);
export var fadeSmooth = trigger('fadeSmooth', [
    state('void', style({ opacity: 0.3 })),
    transition(':enter', [
        style({ transform: 'translateY(15%)' }),
        group([
            animate('300ms', style({ transform: 'translateY(0)' })),
            animate('300ms', style({ opacity: 1 }))
        ])
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)' }),
        group([
            animate('300ms', style({ transform: 'translateY(100%)' })),
            animate('300ms', style({ opacity: 0 }))
        ])
    ])
]);
export var fadeOut = trigger('fadeOut', [
    state('void', style({ opacity: 0 })),
    transition(':leave', animate('300ms ease-in'))
]);
export var fadeInOut = trigger('fadeInOut', [
    state('void', style({ opacity: 0 })),
    transition(':enter', animate('300ms ease-in')),
    transition(':leave', animate('300ms ease-in'))
]);
export var listStateTrigger = trigger('listState', [
    transition('* => *', [
        query(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            stagger(100, [
                group([
                    animate('400ms ease-out', style({
                        opacity: 1,
                        offset: 1
                    })),
                    animate('300ms ease-out', style({
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ], { optional: true })
    ])
]);
export var listState = animation([
    transition('* => *', [
        query(':enter', [
            style({
                opacity: 0,
                transform: 'translateY(15%)'
            }),
            stagger(100, [
                group([
                    animate('400ms ease-out', style({
                        opacity: 1,
                        offset: 1
                    })),
                    animate('300ms ease-out', style({
                        transform: 'translateY(0)'
                    }))
                ])
            ])
        ], { optional: true })
    ])
]);
export var listAnimation = animation([
    query(':enter', [style({ opacity: 0, height: 0 })], { optional: true }),
    query(':leave', [
        style({ opacity: 1, height: '*' }),
        animate('{{ time }}', style({ opacity: 0, height: 0 }))
    ], { optional: true }),
    query(':enter', stagger('300ms', [
        group([
            animate('{{ time }}', style({
                opacity: 1,
                offset: 1
            })),
            animate('{{ time }}', style({
                transform: 'translateY(0)'
            }))
        ])
    ]), { optional: true })
], { params: { time: '.6s ease' } });
export var itemAnimation = animation([
    query('.item', style({ opacity: 0, height: 0 }), { optional: true }),
    query('.item', [
        stagger(300, [
            group([
                animate('{{ time }}', style({
                    opacity: 1,
                    offset: 1
                })),
                animate('{{ time }}', style({
                    transform: 'translateY(0)'
                }))
            ])
        ])
    ], { optional: true })
], { params: { time: '.6s ease' } });
export var tableSize = trigger('tableSize', [
    state('eighty', style({
        width: '62%',
        'margin-right': '2%',
        float: 'left'
    })),
    state('sixty', style({
        width: '42%',
        'margin-right': '2%',
        float: 'left'
    })),
    state('largeForm', style({
        width: '23%',
        'margin-right': '2%',
        float: 'left'
    })),
    state('full', style({
        width: '0%',
        'margin-right': '0%',
        opacity: '0',
        float: 'left'
    })),
    state('hundred', style({
        width: '100%',
        float: 'left'
    })),
    transition('eighty <=> hundred', animate('300ms')),
    transition('sixty <=> hundred', animate('300ms')),
    transition('largeForm <=> hundred', animate('300ms')),
    transition('full <=> hundred', animate('300ms'))
]);
export var formSize = trigger('formSize', [
    state('twenty', style({
        width: '36%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    state('sixty', style({
        width: '56%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    state('largeForm', style({
        width: '75%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    state('full', style({
        width: '100%',
        float: 'left',
        transform: 'scale(1, 1)'
    })),
    state('zero', style({
        width: '0px',
        float: 'left',
        display: 'none',
        transform: 'scale(0, 0)',
    })),
    transition('twenty => zero', group([
        animate('300ms', style({ opacity: 0 })),
        animate('300ms', style({ width: '0px' })),
        animate('300ms', style({ transform: 'scale(0, 0)' }))
    ])),
    transition('zero => twenty', group([
        animate('300ms', style({ opacity: 1 })),
        animate('300ms', style({ width: '36%' })),
        animate('300ms', style({ transform: 'scale(1, 1)' }))
    ])),
    transition('sixty => zero', group([
        animate('300ms', style({ opacity: 0 })),
        animate('300ms', style({ width: '0px' })),
        animate('300ms', style({ transform: 'scale(0, 0)' }))
    ])),
    transition('zero => sixty', group([
        animate('300ms', style({ opacity: 1 })),
        animate('300ms', style({ width: '56%' })),
        animate('300ms', style({ transform: 'scale(1, 1)' }))
    ])),
    transition('largeForm => zero', group([
        animate('300ms', style({ opacity: 0 })),
        animate('300ms', style({ width: '0px' })),
        animate('300ms', style({ transform: 'scale(0, 0)' }))
    ])),
    transition('zero => largeForm', group([
        animate('300ms', style({ opacity: 1 })),
        animate('300ms', style({ width: '75%' })),
        animate('300ms', style({ transform: 'scale(1, 1)' }))
    ])),
    transition('full => zero', group([
        animate('300ms', style({ opacity: 0 })),
        animate('300ms', style({ width: '0px' })),
        animate('300ms', style({ transform: 'scale(0, 0)' }))
    ])),
    transition('zero => full', group([
        animate('300ms', style({ opacity: 1 })),
        animate('300ms', style({ width: '100%' })),
        animate('300ms', style({ transform: 'scale(1, 1)' }))
    ]))
]);
//# sourceMappingURL=router-animation.js.map