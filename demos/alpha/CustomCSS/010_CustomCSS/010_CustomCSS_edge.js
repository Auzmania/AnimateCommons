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
            js+"jquery-2.0.3.min.js",
            "http://localhost/Go/EdgeCommons/Codebase/sprint/an/2.0.1/js/max/EdgeCommons.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.377",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'runButton',
                            type: 'rect',
                            rect: ['18px', '326px', '244px', '48px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['35px', '10px', '164px', '27px', 'auto', 'auto'],
                                text: "RUN",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'RoundRect',
                            type: 'rect',
                            rect: ['44px', '38px', '279px', '182px', 'auto', 'auto'],
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "test"
                        },
                        {
                            id: 'RoundRect2',
                            type: 'rect',
                            rect: ['353px', '190px', '164px', '182px', 'auto', 'auto'],
                            borderRadius: ["6px", "6px", "6px", "6px 6px"],
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            userClass: "test"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid1",
                            "top",
                            0,
                            1000,
                            "linear",
                            "${RoundRect2}",
                            '109px',
                            '190px'
                        ],
                        [
                            "eid2",
                            "left",
                            0,
                            1000,
                            "linear",
                            "${runButton}",
                            '18px',
                            '48px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("010_CustomCSS_edgeActions.js");
})("EDGE-17982006");
