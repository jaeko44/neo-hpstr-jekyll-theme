/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'fire',
                            type: 'image',
                            rect: ['96px', '820px', '265px', '145px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire.svg",'0px','0px']
                        },
                        {
                            id: 'newrocket-only2',
                            type: 'image',
                            rect: ['83px', '-300px', '284px', '284px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"newrocket-only.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '449px', '900px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1835,
                    autoPlay: true,
                    data: [
                        [
                            "eid195",
                            "top",
                            0,
                            1835,
                            "easeInQuart",
                            "${fire}",
                            '800px',
                            '-100px'
                        ],
                        [
                            "eid193",
                            "top",
                            0,
                            1835,
                            "easeInQuart",
                            "${newrocket-only2}",
                            '646px',
                            '-300px'
                        ],
                        [
                            "eid19",
                            "opacity",
                            0,
                            500,
                            "easeInQuart",
                            "${fire}",
                            '0.5',
                            '1'
                        ]
                    ]
                }
            },
            "Symbol_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Pasted',
                            type: 'image',
                            rect: ['0px', '0px', '110px', '230px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Pasted.svg', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '110px', '230px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("rocket-fly_edgeActions.js");
})("EDGE-53915579");
