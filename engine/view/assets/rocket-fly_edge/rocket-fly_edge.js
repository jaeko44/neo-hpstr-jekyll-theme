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
                            id: 'Rocket',
                            type: 'image',
                            rect: ['174px', '-237px', '101px', '145px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted2.svg",'0px','0px']
                        },
                        {
                            id: 'fire',
                            type: 'image',
                            rect: ['67px', '-103px', '265px', '145px', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fire.svg",'0px','0px']
                        },
                        {
                            id: 'Left-Shade',
                            type: 'rect',
                            rect: ['181px', '901px', '2px', '52px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(119,166,212,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Right-Shade',
                            type: 'rect',
                            rect: ['266px', '901px', '2px', '52px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(119,166,212,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Middle-leftshade',
                            type: 'rect',
                            rect: ['212px', '908px', '2px', '52px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(119,166,212,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'Middle-rightshade',
                            type: 'rect',
                            rect: ['235px', '908px', '2px', '52px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(119,166,212,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '449px', '900px'],
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
                            "eid110",
                            "height",
                            0,
                            250,
                            "linear",
                            "${Middle-leftshade}",
                            '50px',
                            '271px'
                        ],
                        [
                            "eid143",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Middle-leftshade}",
                            '271px',
                            '933px'
                        ],
                        [
                            "eid146",
                            "height",
                            1000,
                            835,
                            "linear",
                            "${Middle-leftshade}",
                            '933px',
                            '52px'
                        ],
                        [
                            "eid116",
                            "top",
                            0,
                            250,
                            "linear",
                            "${Right-Shade}",
                            '901px',
                            '675px'
                        ],
                        [
                            "eid141",
                            "top",
                            250,
                            750,
                            "linear",
                            "${Right-Shade}",
                            '675px',
                            '0px'
                        ],
                        [
                            "eid153",
                            "top",
                            1000,
                            835,
                            "linear",
                            "${Right-Shade}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid171",
                            "opacity",
                            0,
                            1835,
                            "linear",
                            "${Middle-leftshade}",
                            '1',
                            '0'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            250,
                            "linear",
                            "${fire}",
                            '864px',
                            '586px'
                        ],
                        [
                            "eid133",
                            "top",
                            250,
                            200,
                            "linear",
                            "${fire}",
                            '586px',
                            '395px'
                        ],
                        [
                            "eid128",
                            "top",
                            450,
                            185,
                            "linear",
                            "${fire}",
                            '395px',
                            '211px'
                        ],
                        [
                            "eid138",
                            "top",
                            635,
                            365,
                            "linear",
                            "${fire}",
                            '211px',
                            '-103px'
                        ],
                        [
                            "eid154",
                            "top",
                            1000,
                            250,
                            "linear",
                            "${fire}",
                            '-103px',
                            '-143px'
                        ],
                        [
                            "eid112",
                            "height",
                            0,
                            250,
                            "linear",
                            "${Left-Shade}",
                            '50px',
                            '271px'
                        ],
                        [
                            "eid145",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Left-Shade}",
                            '271px',
                            '933px'
                        ],
                        [
                            "eid147",
                            "height",
                            1000,
                            835,
                            "linear",
                            "${Left-Shade}",
                            '933px',
                            '52px'
                        ],
                        [
                            "eid111",
                            "height",
                            0,
                            250,
                            "linear",
                            "${Right-Shade}",
                            '50px',
                            '271px'
                        ],
                        [
                            "eid144",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Right-Shade}",
                            '271px',
                            '933px'
                        ],
                        [
                            "eid149",
                            "height",
                            1000,
                            835,
                            "linear",
                            "${Right-Shade}",
                            '933px',
                            '52px'
                        ],
                        [
                            "eid118",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Right-Shade}",
                            '266px',
                            '267px'
                        ],
                        [
                            "eid122",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Middle-rightshade}",
                            '235px',
                            '236px'
                        ],
                        [
                            "eid172",
                            "opacity",
                            0,
                            1835,
                            "linear",
                            "${Left-Shade}",
                            '1',
                            '0'
                        ],
                        [
                            "eid136",
                            "width",
                            250,
                            200,
                            "linear",
                            "${fire}",
                            '265px',
                            '287px'
                        ],
                        [
                            "eid140",
                            "width",
                            450,
                            185,
                            "linear",
                            "${fire}",
                            '287px',
                            '315px'
                        ],
                        [
                            "eid135",
                            "height",
                            250,
                            200,
                            "linear",
                            "${fire}",
                            '145px',
                            '157px'
                        ],
                        [
                            "eid139",
                            "height",
                            450,
                            185,
                            "linear",
                            "${fire}",
                            '157px',
                            '172px'
                        ],
                        [
                            "eid174",
                            "opacity",
                            0,
                            1835,
                            "linear",
                            "${Right-Shade}",
                            '1',
                            '0'
                        ],
                        [
                            "eid173",
                            "opacity",
                            0,
                            1835,
                            "linear",
                            "${Middle-rightshade}",
                            '1',
                            '0'
                        ],
                        [
                            "eid134",
                            "left",
                            250,
                            200,
                            "linear",
                            "${fire}",
                            '92px',
                            '81px'
                        ],
                        [
                            "eid137",
                            "left",
                            450,
                            185,
                            "linear",
                            "${fire}",
                            '81px',
                            '67px'
                        ],
                        [
                            "eid113",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Middle-leftshade}",
                            '908px',
                            '0px'
                        ],
                        [
                            "eid150",
                            "top",
                            1000,
                            835,
                            "linear",
                            "${Middle-leftshade}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid18",
                            "opacity",
                            0,
                            40,
                            "linear",
                            "${fire}",
                            '0',
                            '0.5'
                        ],
                        [
                            "eid19",
                            "opacity",
                            40,
                            460,
                            "linear",
                            "${fire}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid3",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Rocket}",
                            '730px',
                            '-237px'
                        ],
                        [
                            "eid120",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${Middle-leftshade}",
                            '212px',
                            '213px'
                        ],
                        [
                            "eid114",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Left-Shade}",
                            '901px',
                            '0px'
                        ],
                        [
                            "eid151",
                            "top",
                            1000,
                            835,
                            "linear",
                            "${Left-Shade}",
                            '0px',
                            '-60px'
                        ],
                        [
                            "eid109",
                            "height",
                            0,
                            250,
                            "linear",
                            "${Middle-rightshade}",
                            '50px',
                            '271px'
                        ],
                        [
                            "eid142",
                            "height",
                            250,
                            750,
                            "linear",
                            "${Middle-rightshade}",
                            '271px',
                            '933px'
                        ],
                        [
                            "eid148",
                            "height",
                            1000,
                            835,
                            "linear",
                            "${Middle-rightshade}",
                            '933px',
                            '52px'
                        ],
                        [
                            "eid115",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${Middle-rightshade}",
                            '908px',
                            '0px'
                        ],
                        [
                            "eid152",
                            "top",
                            1000,
                            835,
                            "linear",
                            "${Middle-rightshade}",
                            '0px',
                            '-60px'
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
                            isStage: 'true',
                            rect: [undefined, undefined, '110px', '230px']
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
