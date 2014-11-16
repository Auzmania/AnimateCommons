/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'source-sans-pro, sans-serif': '<script src=\"http://use.edgefonts.net/source-sans-pro:n4,n9,n7,i7,i4,n3,i3,n6,i6,i9,n2,i2:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
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
                            id: 'ABOUT',
                            symbolName: 'ABOUT',
                            type: 'rect',
                            rect: ['0', '0', '600', '400', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'character',
                            type: 'image',
                            rect: ['37', '38', '207', '350', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"SVG_Character.svg",'0px','0px']
                        },
                        {
                            id: 'selectedPartTxt',
                            type: 'text',
                            rect: ['264', '207', '312px', '61px', 'auto', 'auto'],
                            text: "selectedPartTxt<br>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [20, ""], "rgba(0,0,0,1)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['270', '57', '312px', '98px', 'auto', 'auto'],
                            fill: ["rgba(72,72,72,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['260', '102', '31px', '34px', 'auto', 'auto'],
                            fill: ["rgba(72,72,72,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            transform: [[],['45']]
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['288', '72', '279px', '74px', 'auto', 'auto'],
                            text: "Hi! Select my cap, shirt or pants and change the color!",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(255,255,255,1)", "normal", "none", "", "break-word", ""]
                        },
                        {
                            id: 'EllipseCopy3',
                            type: 'ellipse',
                            rect: ['275', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(44,153,72,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy2',
                            type: 'ellipse',
                            rect: ['349', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(223,126,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['426', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(0,76,255,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['506', '288', '61px', '61px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(142,43,153,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600', '400', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(191,191,191,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ABOUT": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.377",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '600px', '400px', 'auto', 'auto'],
                            id: 'about_bg',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/about_bg.jpg', '0px', '0px']
                        },
                        {
                            rect: ['0', 0, '600', '27', 'auto', 'auto'],
                            id: 'overlay',
                            type: 'group',
                            c: [
                            {
                                rect: [0, 'auto', 600, 389, 'auto', 7],
                                id: 'base',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(45,45,45,1.00)']
                            },
                            {
                                rect: ['563', '3', '24', '24', 'auto', 'auto'],
                                id: 'expand_btn',
                                cursor: 'pointer',
                                type: 'group',
                                c: [
                                {
                                    rect: [0, 0, 24, 24, 'auto', 'auto'],
                                    borderRadius: ['50%', '50%', '50%', '50%'],
                                    id: 'arrow_bg',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'ellipse',
                                    fill: ['rgba(45,45,45,1)']
                                },
                                {
                                    rect: [5, 5, '14px', '14px', 'auto', 'auto'],
                                    id: 'arrow',
                                    transform: [[0, 0, 0], ['0deg', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                                    type: 'image',
                                    fill: ['rgba(0,0,0,0)', 'images/about_arrow.svg', '0px', '0px']
                                }]
                            },
                            {
                                type: 'text',
                                rect: [12, 2, 'auto', 'auto', 'auto', 'auto'],
                                id: 'title',
                                text: 'SVG DEMO',
                                align: 'left',
                                font: ['source-sans-pro, sans-serif', [12, 'px'], 'rgba(132,132,132,1.00)', '600', 'none', 'normal', '', 'nowrap']
                            },
                            {
                                type: 'text',
                                rect: ['12px', -353, '556px', 327, 'auto', 'auto'],
                                id: 'infotext',
                                text: 'edgecommons.org<br><br>SVG Example<br><br>Example by Thomas Widjaja<br><br>Visual assets by Jacki Schepers',
                                align: 'left',
                                font: ['source-sans-pro, sans-serif', [12, ''], 'rgba(132,132,132,1)', '600', 'none', 'normal', '', '']
                            }]
                        }
                    ],
                    style: {
                        '${Text2}': {
                            rect: [null, -351, null, 327]
                        },
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 600, 400]
                        }
                    }
                },
                timeline: {
                    duration: 1010,
                    autoPlay: false,
                    data: [
                        [
                            "eid22",
                            "rotateZ",
                            0,
                            250,
                            "easeInOutQuad",
                            "${arrow}",
                            '0deg',
                            '180deg'
                        ],
                        [
                            "eid20",
                            "top",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${overlay}",
                            '0px',
                            '369px'
                        ],
                        [
                            "eid26",
                            "top",
                            1010,
                            0,
                            "linear",
                            "${infotext}",
                            '-353px',
                            '-353px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-13181186");
