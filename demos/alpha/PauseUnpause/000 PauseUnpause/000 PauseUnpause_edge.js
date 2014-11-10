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
            "http://localhost/Dropbox/Aktiv/Intern/EdgeDocks/Products/EdgeCommons/Codebase/sprint/an/2.0.2/js/max/EdgeCommons.js"
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
                            id: 'Rectangle',
                            type: 'rect',
                            rect: ['57px', '33px', '480px', '10px', 'auto', 'auto'],
                            fill: ["rgba(227,227,227,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            c: [
                            {
                                id: 'RectangleCopy',
                                type: 'rect',
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                fill: ["rgba(227,227,227,1.00)",[0,[['rgba(49,45,54,1.00)',12],['rgba(81,44,139,1.00)',98]]]],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        },
                        {
                            id: 'MySymbol1',
                            symbolName: 'MySymbol1',
                            type: 'rect',
                            rect: ['41px', '68px', '517', '170px', 'auto', 'auto']
                        },
                        {
                            id: 'MySymbol1Copy',
                            symbolName: 'MySymbol1',
                            type: 'rect',
                            rect: ['41px', '249px', '517', '170px', 'auto', 'auto']
                        },
                        {
                            id: 'btnPause',
                            type: 'rect',
                            rect: ['118px', 'auto', '171px', '39px', 'auto', '20px'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(50,50,50,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['1px', 'auto', '171px', '24px', 'auto', '10px'],
                                text: "pause",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'btnUnpause',
                            type: 'rect',
                            rect: ['310px', 'auto', '171px', '39px', 'auto', '20px'],
                            cursor: 'pointer',
                            borderRadius: ["10px", "10px", "10px", "10px"],
                            fill: ["rgba(50,50,50,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'TextCopy',
                                type: 'text',
                                rect: ['1px', 'auto', '171px', '24px', 'auto', '10px'],
                                text: "unpause",
                                align: "center",
                                font: ['Arial, Helvetica, sans-serif', [24, ""], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'AnotherSymbol',
                            symbolName: 'AnotherSymbol',
                            type: 'rect',
                            rect: ['22px', '445px', '556', '260px', 'auto', 'auto']
                        },
                        {
                            id: 'Text4',
                            type: 'text',
                            rect: ['41px', '11px', '132px', '10px', 'auto', 'auto'],
                            text: "Stage",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(166,166,166,1.00)", "400", "none solid rgb(142, 142, 142)", "normal", "break-word", "normal"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '600px', '800px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid4",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${RectangleCopy}",
                            '0%',
                            '100%'
                        ],
                        [
                            "eid60",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${MySymbol1Copy}",
                            '249px',
                            '249px'
                        ],
                        [
                            "eid58",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${MySymbol1Copy}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid53",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${MySymbol1}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid65",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${AnotherSymbol}",
                            '22px',
                            '22px'
                        ],
                        [
                            "eid66",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${AnotherSymbol}",
                            '445px',
                            '445px'
                        ],
                        [
                            "eid68",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${AnotherSymbol}",
                            '260px',
                            '260px'
                        ]
                    ]
                }
            },
            "MySymbol1": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.377",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(198,203,205,1.00)']
                        },
                        {
                            rect: ['120px', '30px', '380px', '25px', 'auto', 'auto'],
                            id: 'RectangleCopy2',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(227,227,227,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(227,227,227,1.00)', [0, [['rgba(49,45,54,1.00)', 12], ['rgba(128,63,231,1.00)', 98]]]]
                            }]
                        },
                        {
                            rect: ['20px', '30px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'pauseBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['8px', '7px', '2px', '12px', 'auto', 'auto'],
                                id: 'Rectangle4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(142,142,142,1.00)']
                            },
                            {
                                rect: ['14px', '7px', '2px', '12px', 'auto', 'auto'],
                                id: 'Rectangle4Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(142,142,142,1.00)']
                            }]
                        },
                        {
                            rect: ['48px', '30px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'playBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                id: 'Text3',
                                text: '&gt;',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['76px', '30px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'playReverseBtn',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                id: 'Text3Copy',
                                text: '&lt;',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            id: 'SubSymbol',
                            symbolName: 'SubSymbol',
                            rect: ['20px', '75px', '480px', '70px', 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['20px', '10px', '132px', '10px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(142, 142, 142)', 'normal', 'break-word', 'normal'],
                            id: 'Text4',
                            text: 'MySymbol',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '520px', '170px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    data: [
                        [
                            "eid55",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${SubSymbol}",
                            '20px',
                            '20px'
                        ],
                        [
                            "eid52",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${SubSymbol}",
                            '75px',
                            '75px'
                        ],
                        [
                            "eid7",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${RectangleCopy3}",
                            '0%',
                            '100%'
                        ],
                        [
                            "eid49",
                            "height",
                            3000,
                            0,
                            "linear",
                            "${SubSymbol}",
                            '70px',
                            '70px'
                        ],
                        [
                            "eid45",
                            "width",
                            3000,
                            0,
                            "linear",
                            "${SubSymbol}",
                            '480px',
                            '480px'
                        ]
                    ]
                }
            },
            "AnotherSymbol": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.377",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '556px', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRect3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(126,187,213,1.00)']
                        },
                        {
                            rect: ['120px', '30px', '416px', '25px', 'auto', 'auto'],
                            id: 'RectangleCopy4',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(227,227,227,1.00)'],
                            c: [
                            {
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                id: 'RectangleCopy5',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(227,227,227,1.00)', [0, [['rgba(83,11,56,1.00)', 12], ['rgba(215,6,111,1.00)', 98]]]]
                            }]
                        },
                        {
                            id: 'MySymbol13',
                            symbolName: 'MySymbol1',
                            rect: ['16px', '72px', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            rect: ['20px', '10px', '132px', '10px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(142, 142, 142)', 'normal', 'break-word', 'normal'],
                            id: 'Text4Copy2',
                            text: 'AnotherSymbol',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['20px', '30px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'pauseBtnCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['8px', '7px', '2px', '12px', 'auto', 'auto'],
                                id: 'Rectangle4Copy7',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(142,142,142,1.00)']
                            },
                            {
                                rect: ['14px', '7px', '2px', '12px', 'auto', 'auto'],
                                id: 'Rectangle4Copy6',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(142,142,142,1.00)']
                            }]
                        },
                        {
                            rect: ['48px', '30px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'playBtnCopy3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                id: 'Text3Copy5',
                                text: '&gt;',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['76px', '30px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'playReverseBtnCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                id: 'Text3Copy4',
                                text: '&lt;',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '556px', '260px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: false,
                    data: [
                        [
                            "eid12",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${RectangleCopy5}",
                            '0%',
                            '100%'
                        ]
                    ]
                }
            },
            "SubSymbol": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.377",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: true,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(160,166,168,1.00)']
                        },
                        {
                            rect: ['120px', '29px', '344px', '25px', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(147,147,147,1)'],
                            c: [
                            {
                                rect: ['0px', '0px', '0%', '100%', 'auto', 'auto'],
                                id: 'Rectangle3Copy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(147,147,147,1)', [0, [['rgba(63,71,15,1.00)', 0], ['rgba(218,252,0,1.00)', 100]]]]
                            }]
                        },
                        {
                            rect: ['18px', '29px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'pauseBtnCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['8px', '7px', '2px', '12px', 'auto', 'auto'],
                                id: 'Rectangle4Copy5',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(142,142,142,1.00)']
                            },
                            {
                                rect: ['14px', '7px', '2px', '12px', 'auto', 'auto'],
                                id: 'Rectangle4Copy4',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(142,142,142,1.00)']
                            }]
                        },
                        {
                            rect: ['46px', '29px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'playBtnCopy2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                id: 'Text3Copy3',
                                text: '&gt;',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['74px', '29px', '25px', '25px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'playReverseBtnCopy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(39,39,39,1.00)'],
                            c: [
                            {
                                rect: ['0px', '5px', '25px', '14px', 'auto', 'auto'],
                                font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(142,142,142,1.00)', '400', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', ''],
                                id: 'Text3Copy2',
                                text: '&lt;',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['18px', '10px', '132px', '10px', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none solid rgb(142, 142, 142)', 'normal', 'break-word', 'normal'],
                            id: 'Text4Copy',
                            text: 'SubSymbol',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '480px', '70px']
                        }
                    }
                },
                timeline: {
                    duration: 20000,
                    autoPlay: true,
                    labels: {
                        "start": 20000
                    },
                    data: [
                        [
                            "eid29",
                            "width",
                            0,
                            20000,
                            "linear",
                            "${Rectangle3Copy}",
                            '0%',
                            '100%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("000%20PauseUnpause_edgeActions.js");
})("EDGE-38246524");
