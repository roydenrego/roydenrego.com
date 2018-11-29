/* global $ */
/* global moment */
/*--------------  coin_sales1 start ------------*/
if ($('#coin_sales1').length) {
    var ctx = document.getElementById("coin_sales1").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "Sales",
                backgroundColor: "rgba(117, 19, 246, 0.1)",
                borderColor: '#0b76b6',
                data: [18, 41, 86, 49, 20, 35, 20, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales1 End ------------*/

/*--------------  coin_sales2 start ------------*/
if ($('#coin_sales2').length) {
    var ctx = document.getElementById("coin_sales2").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "Sales",
                backgroundColor: "rgba(240, 180, 26, 0.1)",
                borderColor: '#F0B41A',
                data: [18, 41, 86, 49, 20, 65, 64, 50, 49, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}
/*--------------  coin_sales2 End ------------*/

/*--------------  coin_sales3 start ------------*/
if ($('#coin_sales3').length) {
    var ctx = document.getElementById("coin_sales3").getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "January", "February", "March", "April", "May"],
            datasets: [{
                label: "Sales",
                backgroundColor: "rgba(247, 163, 58, 0.1)",
                borderColor: '#fd9d24',
                fill: true,
                data: [18, 41, 50, 49, 20, 65, 50, 86, 20, 30, 45, 25],
            }]
        },
        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            animation: {
                easing: "easeInOutBack"
            },
            scales: {
                yAxes: [{
                    display: !1,
                    ticks: {
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold",
                        beginAtZero: !0,
                        maxTicksLimit: 5,
                        padding: 0
                    },
                    gridLines: {
                        drawTicks: !1,
                        display: !1
                    }
                }],
                xAxes: [{
                    display: !1,
                    gridLines: {
                        zeroLineColor: "transparent"
                    },
                    ticks: {
                        padding: 0,
                        fontColor: "rgba(0,0,0,0.5)",
                        fontStyle: "bold"
                    }
                }]
            }
        }
    });
}

/*--------------  coin_sales3 End ------------*/

/*--------------  overview-chart start ------------*/
if ($('#verview-shart').length) {
    var myConfig = {
        "type": "line",

        "scale-x": { //X-Axis
            "labels": ["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"],
            "label": {
                "font-size": 14,
                "offset-x": 0,
            },
            "item": { //Scale Items (scale values or labels)
                "font-size": 10,
            },
            "guide": { //Guides
                "visible": false,
                "line-style": "solid", //"solid", "dotted", "dashed", "dashdot"
                "alpha": 1
            }
        },
        "plot": { "aspect": "spline" },
        "series": [{
                "values": [20, 25, 30, 35, 45, 40, 40, 35, 25, 17, 40, 50],
                "line-color": "#F0B41A",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#D79D3B",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#D79D3B",
                    /* hexadecimal or RBG value */
                }
            },
            {
                "values": [40, 45, 30, 20, 30, 35, 45, 55, 40, 30, 55, 30],
                "line-color": "#0884D9",
                /* "dotted" | "dashed" */
                "line-width": 5 /* in pixels */ ,
                "marker": { /* Marker object */
                    "background-color": "#067dce",
                    /* hexadecimal or RGB value */
                    "size": 5,
                    /* in pixels */
                    "border-color": "#067dce",
                    /* hexadecimal or RBG value */
                }
            }
        ]
    };

    zingchart.render({
        id: 'verview-shart',
        data: myConfig,
        height: "100%",
        width: "100%"
    });
}

/*--------------  overview-chart END ------------*/

/*--------------  market status chart start ------------*/

if ($('#mvaluechart').length) {
    var ctx = document.getElementById('mvaluechart').getContext('2d');
    var myLineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Market Value",
                backgroundColor: 'transparent',
                borderColor: '#6e00ff',
                borderWidth: 2,
                data: [0, 15, 30, 10, 25, 0, 30],
                pointBorderColor: "transparent",
                pointBorderWidth: 10
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            },
            scales: {
                yAxes: [{
                    display: !1
                }],
                xAxes: [{
                    display: !1
                }]
            }
        }
    });
}

if ($('#mvaluechart2').length) {
    var ctx = document.getElementById('mvaluechart2').getContext('2d');
    var myLineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Market Value",
                backgroundColor: 'transparent',
                borderColor: '#6e00ff',
                borderWidth: 2,
                data: [0, 15, 30, 10, 25, 0, 50],
                pointBorderColor: "transparent",
                pointBorderWidth: 10
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            },
            scales: {
                yAxes: [{
                    display: !1
                }],
                xAxes: [{
                    display: !1
                }]
            }
        }
    });
}

if ($('#mvaluechart3').length) {
    var ctx = document.getElementById('mvaluechart3').getContext('2d');
    var myLineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July", "Agut"],
            datasets: [{
                label: "Market Value",
                backgroundColor: 'transparent',
                borderColor: '#6e00ff',
                borderWidth: 2,
                data: [0, 15, 40, 10, 25, 0, 30, 20],
                pointBorderColor: "transparent",
                pointBorderWidth: 10
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            },
            scales: {
                yAxes: [{
                    display: !1
                }],
                xAxes: [{
                    display: !1
                }]
            }
        }
    });
}

if ($('#mvaluechart4').length) {
    var ctx = document.getElementById('mvaluechart4').getContext('2d');
    var myLineChart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',

        // The data for our dataset
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Market Value",
                backgroundColor: 'transparent',
                borderColor: '#6e00ff',
                borderWidth: 2,
                data: [0, 30, 30, 10, 25, 0, 30],
                pointBorderColor: "transparent",
                pointBorderWidth: 10
            }]
        },

        // Configuration options go here
        options: {
            legend: {
                display: false
            },
            tooltips: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.yLabel;
                    }
                }
            },
            elements: {
                line: {
                    tension: 0, // disables bezier curves
                }
            },
            scales: {
                yAxes: [{
                    display: !1
                }],
                xAxes: [{
                    display: !1
                }]
            }
        }
    });
}

/*--------------  market status chart END ------------*/

/*--------------  visitor graph line chart start ------------*/
if ($('#visitor_graph').length) {

    Highcharts.chart('visitor_graph', {
        chart: {
            type: 'areaspline'
        },
        title: false,
        yAxis: {
            title: false,
            gridLineColor: '#fbf7f7',
            gridLineWidth: 1
        },
        xAxis: {
            gridLineColor: '#fbf7f7',
            gridLineWidth: 1
        },
        series: [{
                name: 'USD',
                data: [400, 470, 520, 500, 420, 350, 320, 400, 550, 600, 500, 420, 400],
                fillColor: 'rgba(76, 57, 249, 0.5)',
                lineColor: 'transparent'
            },
            {
                name: 'BTC',
                data: [450, 520, 550, 400, 450, 500, 400, 450, 500, 450, 400, 500, 450],
                fillColor: 'rgba(103, 13, 251, 0.5)',
                lineColor: 'transparent'
            }
        ]
    });
}
/*--------------  END visitor graph line chart start ------------*/

/*-------------- 1 line chart amchart start ------------*/
if ($('#amlinechart1').length) {
    var chart = AmCharts.makeChart("amlinechart1", {
        "type": "serial",
        "theme": "light",
        "marginRight": 20,
        "autoMarginOffset": 20,
        "dataDateFormat": "YYYY-MM-DD HH:NN",
        "dataProvider": [{
            "date": "2012-01-01",
            "value": 8
        }, {
            "date": "2012-01-02",
            "color": "#6e00ff",
            "value": 10
        }, {
            "date": "2012-01-03",
            "value": 12
        }, {
            "date": "2012-01-04",
            "value": 14
        }, {
            "date": "2012-01-05",
            "value": 11
        }, {
            "date": "2012-01-06",
            "value": 6
        }, {
            "date": "2012-01-07",
            "value": 7
        }, {
            "date": "2012-01-08",
            "value": 9
        }, {
            "date": "2012-01-09",
            "value": 13
        }, {
            "date": "2012-01-10",
            "value": 15
        }, {
            "date": "2012-01-11",
            "color": "#6e00ff",
            "value": 19
        }, {
            "date": "2012-01-12",
            "value": 21
        }, {
            "date": "2012-01-13",
            "value": 22
        }, {
            "date": "2012-01-14",
            "value": 20
        }, {
            "date": "2012-01-15",
            "value": 18
        }, {
            "date": "2012-01-16",
            "value": 14
        }, {
            "date": "2012-01-17",
            "color": "#6e00ff",
            "value": 16
        }, {
            "date": "2012-01-18",
            "value": 18
        }, {
            "date": "2012-01-19",
            "value": 17
        }, {
            "date": "2012-01-20",
            "value": 15
        }, {
            "date": "2012-01-21",
            "value": 12
        }, {
            "date": "2012-01-22",
            "color": "#6e00ff",
            "value": 10
        }, {
            "date": "2012-01-23",
            "value": 8
        }],
        "valueAxes": [{
            "axisAlpha": 0,
            "guides": [{
                "fillAlpha": 0.1,
                "fillColor": "#6e00ff",
                "lineAlpha": 0,
                "toValue": 16,
                "value": 10
            }],
            "position": "left",
            "tickLength": 0
        }],
        "graphs": [{
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>value:[[value]]</span></b>",
            "bullet": "round",
            "dashLength": 3,
            "colorField": "color",
            "valueField": "value"
        }],
        "trendLines": [{
            "finalDate": "2012-01-11 12",
            "finalValue": 19,
            "initialDate": "2012-01-02 12",
            "initialValue": 10,
            "lineColor": "#6e00ff"
        }, {
            "finalDate": "2012-01-22 12",
            "finalValue": 10,
            "initialDate": "2012-01-17 12",
            "initialValue": 16,
            "lineColor": "#6e00ff"
        }],
        "chartScrollbar": {
            "scrollbarHeight": 2,
            "offset": -1,
            "backgroundAlpha": 0.2,
            "backgroundColor": "#8816FD",
            "selectedBackgroundColor": "#815FF5",
            "selectedBackgroundAlpha": 1
        },
        "chartCursor": {
            "fullWidth": true,
            "valueLineEabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "cursorAlpha": 0
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisAlpha": 0,
            "gridAlpha": 0.1,
            "minorGridAlpha": 0.1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": false
        }
    });

    chart.addListener("dataUpdated", zoomChart);

    function zoomChart() {
        chart.zoomToDates(new Date(2012, 0, 2), new Date(2012, 0, 13));
    }
}
/*-------------- 1 line chart amchart end ------------*/

/*-------------- 2 line chart amchart start ------------*/
if ($('#amlinechart2').length) {
    var chart = AmCharts.makeChart("amlinechart2", {
        "type": "serial",
        "theme": "light",
        "marginTop": 0,
        "marginRight": 20,
        "dataProvider": [{
            "year": "1950",
            "value": -0.307
        }, {
            "year": "1951",
            "value": -0.168
        }, {
            "year": "1952",
            "value": -0.073
        }, {
            "year": "1953",
            "value": -0.027
        }, {
            "year": "1954",
            "value": -0.251
        }, {
            "year": "1955",
            "value": -0.281
        }, {
            "year": "1956",
            "value": -0.348
        }, {
            "year": "1957",
            "value": -0.074
        }, {
            "year": "1958",
            "value": -0.011
        }, {
            "year": "1959",
            "value": -0.074
        }, {
            "year": "1960",
            "value": -0.124
        }, {
            "year": "1961",
            "value": -0.024
        }, {
            "year": "1962",
            "value": -0.022
        }, {
            "year": "1963",
            "value": 0
        }, {
            "year": "1964",
            "value": -0.296
        }, {
            "year": "1965",
            "value": -0.217
        }, {
            "year": "1966",
            "value": -0.147
        }, {
            "year": "1967",
            "value": -0.15
        }, {
            "year": "1968",
            "value": -0.16
        }, {
            "year": "1969",
            "value": -0.011
        }, {
            "year": "1970",
            "value": -0.068
        }, {
            "year": "1971",
            "value": -0.19
        }, {
            "year": "1972",
            "value": -0.056
        }, {
            "year": "1973",
            "value": 0.077
        }, {
            "year": "1974",
            "value": -0.213
        }, {
            "year": "1975",
            "value": -0.17
        }, {
            "year": "1976",
            "value": -0.254
        }, {
            "year": "1977",
            "value": 0.019
        }, {
            "year": "1978",
            "value": -0.063
        }, {
            "year": "1979",
            "value": 0.05
        }, {
            "year": "1980",
            "value": 0.077
        }, {
            "year": "1981",
            "value": 0.12
        }, {
            "year": "1982",
            "value": 0.011
        }, {
            "year": "1983",
            "value": 0.177
        }, {
            "year": "1984",
            "value": -0.021
        }, {
            "year": "1985",
            "value": -0.037
        }, {
            "year": "1986",
            "value": 0.03
        }, {
            "year": "1987",
            "value": 0.179
        }, {
            "year": "1988",
            "value": 0.18
        }, {
            "year": "1989",
            "value": 0.104
        }, {
            "year": "1990",
            "value": 0.255
        }, {
            "year": "1991",
            "value": 0.21
        }, {
            "year": "1992",
            "value": 0.065
        }, {
            "year": "1993",
            "value": 0.11
        }, {
            "year": "1994",
            "value": 0.172
        }, {
            "year": "1995",
            "value": 0.269
        }, {
            "year": "1996",
            "value": 0.141
        }, {
            "year": "1997",
            "value": 0.353
        }, {
            "year": "1998",
            "value": 0.548
        }, {
            "year": "1999",
            "value": 0.298
        }, {
            "year": "2000",
            "value": 0.267
        }, {
            "year": "2001",
            "value": 0.411
        }, {
            "year": "2002",
            "value": 0.462
        }, {
            "year": "2003",
            "value": 0.47
        }, {
            "year": "2004",
            "value": 0.445
        }, {
            "year": "2005",
            "value": 0.47
        }],
        "valueAxes": [{
            "axisAlpha": 0,
            "position": "left"
        }],
        "graphs": [{
            "id": "g1",
            "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
            "bullet": "round",
            "bulletSize": 8,
            "lineColor": "#9656e7",
            "lineThickness": 2,
            "negativeLineColor": "#c69cfd",
            "type": "smoothedLine",
            "valueField": "value"
        }],
        "chartScrollbar": {
            "graph": "g1",
            "gridAlpha": 0,
            "color": "#8816FD",
            "scrollbarHeight": 55,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#8816FD",
            "graphFillAlpha": 0,
            "autoGridCount": true,
            "selectedGraphFillAlpha": 0,
            "graphLineAlpha": 0.2,
            "graphLineColor": "#c2c2c2",
            "selectedGraphLineColor": "#9f46fc",
            "selectedGraphLineAlpha": 1

        },
        "chartCursor": {
            "categoryBalloonDateFormat": "YYYY",
            "cursorAlpha": 0,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "fullWidth": true
        },
        "dataDateFormat": "YYYY",
        "categoryField": "year",
        "categoryAxis": {
            "minPeriod": "YYYY",
            "parseDates": true,
            "minorGridAlpha": 0.1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": false
        }
    });

    chart.addListener("rendered", zoomChart);
    if (chart.zoomChart) {
        chart.zoomChart();
    }

    function zoomChart() {
        chart.zoomToIndexes(Math.round(chart.dataProvider.length * 0.4), Math.round(chart.dataProvider.length * 0.55));
    }
}
/*-------------- 2 line chart amchart end ------------*/

/*-------------- 3 line chart amchart start ------------*/
if ($('#amlinechart3').length) {
    var chartData = generateChartData();
    var chart = AmCharts.makeChart("amlinechart3", {
        "type": "serial",
        "theme": "light",
        "marginRight": 20,
        "autoMarginOffset": 20,
        "marginTop": 7,
        "dataProvider": chartData,
        "valueAxes": [{
            "axisAlpha": 0.2,
            "dashLength": 1,
            "position": "left"
        }],
        "mouseWheelZoomEnabled": true,
        "graphs": [{
            "id": "g1",
            "balloonText": "[[value]]",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "hideBulletsCount": 50,
            "title": "red line",
            "valueField": "visits",
            "useLineColorForBulletBorder": true,
            "balloon": {
                "drop": true
            }
        }],
        "chartScrollbar": {
            "autoGridCount": true,
            "graph": "g1",
            "scrollbarHeight": 40,
            "color": "#fff",
            "selectedBackgroundAlpha": 1,
            "selectedBackgroundColor": "#815BF6",
            "selectedGraphFillAlpha": 0,
            "selectedGraphFillColor": "#8918FE",
            "graphLineAlpha": 0.2,
            "graphLineColor": "#c2c2c2",
            "selectedGraphLineColor": "#fff",
            "selectedGraphLineAlpha": 1
        },
        "chartCursor": {
            "limitToGraph": "g1"
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "axisColor": "#DADADA",
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": false
        }
    });

    chart.addListener("rendered", zoomChart);
    zoomChart();

    // this method is called when chart is first inited as we listen for "rendered" event
    function zoomChart() {
        // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
        chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
    }


    // generate some random data, quite different range

    // generate some random data, quite different range
    function generateChartData() {
        var chartData = [];
        var firstDate = new Date();
        firstDate.setDate(firstDate.getDate() - 5);
        var visits = 1200;
        for (var i = 0; i < 1000; i++) {
            // we create date objects here. In your data, you can have date strings
            // and then set format of your dates using chart.dataDateFormat property,
            // however when possible, use date objects, as this will speed up chart rendering.
            var newDate = new Date(firstDate);
            newDate.setDate(newDate.getDate() + i);

            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);

            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }
}
/*-------------- 3 line chart amchart end ------------*/

/*-------------- 4 line chart amchart start ------------*/
if ($('#amlinechart4').length) {
    var chart = AmCharts.makeChart("amlinechart4", {
        "type": "serial",
        "theme": "light",
        "legend": {
            "useGraphSettings": true
        },
        "dataProvider": [{
            "year": 1930,
            "italy": 1,
            "germany": 5,
            "uk": 3
        }, {
            "year": 1934,
            "italy": 1,
            "germany": 2,
            "uk": 6
        }, {
            "year": 1938,
            "italy": 2,
            "germany": 3,
            "uk": 1
        }, {
            "year": 1950,
            "italy": 3,
            "germany": 4,
            "uk": 1
        }, {
            "year": 1954,
            "italy": 5,
            "germany": 1,
            "uk": 2
        }, {
            "year": 1958,
            "italy": 3,
            "germany": 2,
            "uk": 1
        }, {
            "year": 1962,
            "italy": 1,
            "germany": 2,
            "uk": 3
        }, {
            "year": 1966,
            "italy": 2,
            "germany": 1,
            "uk": 5
        }, {
            "year": 1970,
            "italy": 3,
            "germany": 5,
            "uk": 2
        }, {
            "year": 1974,
            "italy": 4,
            "germany": 3,
            "uk": 6
        }, {
            "year": 1978,
            "italy": 1,
            "germany": 2,
            "uk": 4
        }],
        "startDuration": 0.5,
        "graphs": [{
            "balloonText": "place taken by Italy in [[category]]: [[value]]",
            "bullet": "round",
            "hidden": true,
            "title": "Italy",
            "valueField": "italy",
            "fillAlphas": 0,
            "lineColor": "#31ef98",
            "lineThickness": 2,
            "negativeLineColor": "#17e285",
        }, {
            "balloonText": "place taken by Germany in [[category]]: [[value]]",
            "bullet": "round",
            "title": "Germany",
            "valueField": "germany",
            "fillAlphas": 0,
            "lineColor": "#9656e7",
            "lineThickness": 2,
            "negativeLineColor": "#c69cfd"
        }, {
            "balloonText": "place taken by UK in [[category]]: [[value]]",
            "bullet": "round",
            "title": "United Kingdom",
            "valueField": "uk",
            "fillAlphas": 0,
            "lineColor": "#31aeef",
            "lineThickness": 2,
            "negativeLineColor": "#31aeef",
        }],
        "chartCursor": {
            "cursorAlpha": 0,
            "zoomable": false
        },
        "categoryField": "year",
        "categoryAxis": {
            "gridPosition": "start",
            "axisAlpha": 0,
            "fillAlpha": 0.05,
            "fillColor": "#000000",
            "gridAlpha": 0,
            "position": "top"
        },
        "export": {
            "enabled": false
        }
    });
}
/*-------------- 4 line chart amchart end ------------*/

/*-------------- 5 line chart amchart start ------------*/
if ($('#amlinechart5').length) {
    var chart = AmCharts.makeChart("amlinechart5", {
        "type": "serial",
        "theme": "light",
        "marginRight": 20,
        "marginTop": 17,
        "autoMarginOffset": 20,
        "dataProvider": [{
            "date": "2012-03-01",
            "price": 20
        }, {
            "date": "2012-03-02",
            "price": 75
        }, {
            "date": "2012-03-03",
            "price": 15
        }, {
            "date": "2012-03-04",
            "price": 75
        }, {
            "date": "2012-03-05",
            "price": 158
        }, {
            "date": "2012-03-06",
            "price": 57
        }, {
            "date": "2012-03-07",
            "price": 107
        }, {
            "date": "2012-03-08",
            "price": 89
        }, {
            "date": "2012-03-09",
            "price": 75
        }, {
            "date": "2012-03-10",
            "price": 132
        }, {
            "date": "2012-03-11",
            "price": 158
        }, {
            "date": "2012-03-12",
            "price": 56
        }, {
            "date": "2012-03-13",
            "price": 169
        }, {
            "date": "2012-03-14",
            "price": 24
        }, {
            "date": "2012-03-15",
            "price": 147
        }],
        "valueAxes": [{
            "logarithmic": true,
            "dashLength": 1,
            "guides": [{
                "dashLength": 6,
                "inside": true,
                "label": "average",
                "lineAlpha": 1,
                "value": 90.4
            }],
            "position": "left"
        }],
        "graphs": [{
            "bullet": "round",
            "id": "g1",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 7,
            "lineThickness": 2,
            "title": "Price",
            "type": "smoothedLine",
            "useLineColorForBulletBorder": true,
            "valueField": "price"
        }],
        "chartScrollbar": {},
        "chartCursor": {
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "valueLineAlpha": 0.5,
            "fullWidth": true,
            "cursorAlpha": 0.05
        },
        "dataDateFormat": "YYYY-MM-DD",
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true
        },
        "export": {
            "enabled": false
        }
    });

    chart.addListener("dataUpdated", zoomChart);

    function zoomChart() {
        chart.zoomToDates(new Date(2012, 2, 2), new Date(2012, 2, 10));
    }
}
/*-------------- 5 line chart amchart end ------------*/

/*-------------- 6 line chart chartjs start ------------*/

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function lastNDays(n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push(ordinal_suffix_of(d.getDate()));
    }
    result.reverse();
    return result;
}


$.ajax({
    url: '/admin/seo/minstats',
    method: 'post',
    data: 'days=10',
    success: function(obj) {

        $("#usersCount").text(obj.totalsForAllResults['ga:users']);

        var labels = lastNDays(11);

        var pageviewsDataRows = [];
        var usersDataRows = [];
        var newUsersDataRows = [];
        var sessionsDataRows = [];

        obj.rows.forEach(function(val, index) {
            pageviewsDataRows.push(val[1]);
            usersDataRows.push(val[2]);
            newUsersDataRows.push(val[3]);
            sessionsDataRows.push(val[4]);
        });

        //Loading Users Chart
        if ($('#seolinechart1').length) {
            var ctx = document.getElementById("seolinechart1").getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    labels: lastNDays(11),
                    datasets: [{
                        label: "Users",
                        backgroundColor: "rgba(104, 124, 247, 0.6)",
                        borderColor: '#8596fe',
                        data: usersDataRows,
                    }]
                },
                // Configuration options go here
                options: {
                    legend: {
                        display: false
                    },
                    animation: {
                        easing: "easeInOutBack"
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold",
                                beginAtZero: !0,
                                maxTicksLimit: 5,
                                padding: 0
                            },
                            gridLines: {
                                drawTicks: !1,
                                display: !1
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            gridLines: {
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 0,
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold"
                            }
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0, // disables bezier curves
                        }
                    }
                }
            });
        }


        if ($('#seolinechart2').length) {
            var ctx = document.getElementById("seolinechart2").getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Sessions",
                        backgroundColor: "rgba(96, 241, 205, 0.2)",
                        borderColor: '#3de5bb',
                        data: sessionsDataRows,
                    }]
                },
                // Configuration options go here
                options: {
                    legend: {
                        display: false
                    },
                    animation: {
                        easing: "easeInOutBack"
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold",
                                beginAtZero: !0,
                                maxTicksLimit: 5,
                                padding: 0
                            },
                            gridLines: {
                                drawTicks: !1,
                                display: !1
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            gridLines: {
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 0,
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold"
                            }
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0, // disables bezier curves
                        }
                    }
                }
            });
        }




        if ($('#seolinechart3').length) {
            var ctx = document.getElementById("seolinechart3").getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    labels: labels,
                    datasets: [{
                        label: "Impressions",
                        backgroundColor: "rgba(96, 241, 205, 0)",
                        borderColor: '#fff',
                        data: pageviewsDataRows,
                    }]
                },
                // Configuration options go here
                options: {
                    legend: {
                        display: false
                    },
                    animation: {
                        easing: "easeInOutBack"
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold",
                                beginAtZero: !0,
                                maxTicksLimit: 5,
                                padding: 0
                            },
                            gridLines: {
                                drawTicks: !1,
                                display: !1
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            gridLines: {
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 0,
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold"
                            }
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0, // disables bezier curves
                        }
                    }
                }
            });
        }




        if ($('#seolinechart4').length) {
            var ctx = document.getElementById("seolinechart4").getContext('2d');
            var chart = new Chart(ctx, {
                // The type of chart we want to create
                type: 'line',
                // The data for our dataset
                data: {
                    labels: labels,
                    datasets: [{
                        label: "New Users",
                        backgroundColor: "rgba(96, 241, 205, 0)",
                        borderColor: '#fff',
                        data: newUsersDataRows,
                    }]
                },
                // Configuration options go here
                options: {
                    legend: {
                        display: false
                    },
                    animation: {
                        easing: "easeInOutBack"
                    },
                    scales: {
                        yAxes: [{
                            display: !1,
                            ticks: {
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold",
                                beginAtZero: !0,
                                maxTicksLimit: 5,
                                padding: 0
                            },
                            gridLines: {
                                drawTicks: !1,
                                display: !1
                            }
                        }],
                        xAxes: [{
                            display: !1,
                            gridLines: {
                                zeroLineColor: "transparent"
                            },
                            ticks: {
                                padding: 0,
                                fontColor: "rgba(0,0,0,0.5)",
                                fontStyle: "bold"
                            }
                        }]
                    },
                    elements: {
                        line: {
                            tension: 0, // disables bezier curves
                        }
                    }
                }
            });
        }
    }
});


/*-------------- 10 line chart amchart start ------------*/
$.ajax({
    url: '/admin/seo/userstats',
    method: 'post',
    data: 'days=10',
    success: function(obj) {

        var data = [];
        obj.rows.forEach(function(val, index) {
            data.push({ "date": moment(val[0]).format("gggg-MM-DD"), "value": val[1] });
        });

        if ($('#user-statistics').length) {
            var chart = AmCharts.makeChart("user-statistics", {
                "type": "serial",
                "theme": "light",
                "marginRight": 0,
                "marginLeft": 40,
                "autoMarginOffset": 20,
                "dataDateFormat": "YYYY-MM-DD",
                "valueAxes": [{
                    "id": "v1",
                    "axisAlpha": 0,
                    "position": "left",
                    "ignoreAxisWidth": true
                }],
                "balloon": {
                    "borderThickness": 1,
                    "shadowAlpha": 0
                },
                "graphs": [{
                    "id": "g1",
                    "balloon": {
                        "drop": true,
                        "adjustBorderColor": false,
                        "color": "#ffffff",
                        "type": "smoothedLine"
                    },
                    "fillAlphas": 0.2,
                    "bullet": "round",
                    "bulletBorderAlpha": 1,
                    "bulletColor": "#FFFFFF",
                    "bulletSize": 5,
                    "hideBulletsCount": 50,
                    "lineThickness": 2,
                    "title": "red line",
                    "useLineColorForBulletBorder": true,
                    "valueField": "value",
                    "balloonText": "<span style='font-size:18px;'>[[value]]</span>"
                }],
                "chartCursor": {
                    "valueLineEnabled": true,
                    "valueLineBalloonEnabled": true,
                    "cursorAlpha": 0,
                    "zoomable": false,
                    "valueZoomable": true,
                    "valueLineAlpha": 0.5
                },
                "valueScrollbar": {
                    "autoGridCount": true,
                    "color": "#5E72F3",
                    "scrollbarHeight": 30
                },
                "categoryField": "date",
                "categoryAxis": {
                    "parseDates": true,
                    "dashLength": 1,
                    "minorGridEnabled": true
                },
                "export": {
                    "enabled": false
                },
                "dataProvider": data
            });
        }
    }

});

/*-------------- 10 line chart amchart end ------------*/

/*-------------- 11 line chart amchart start ------------*/
if ($('#salesanalytic').length) {

    var chart = AmCharts.makeChart("salesanalytic", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat": "YYYY-MM-DD",
        "precision": 2,
        "valueAxes": [{
            "id": "v1",
            "title": "Sales",
            "position": "left",
            "autoGridCount": false,
            "labelFunction": function(value) {
                return "$" + Math.round(value) + "M";
            }
        }, {
            "id": "v2",
            "title": "Duration",
            "gridAlpha": 0,
            "position": "right",
            "autoGridCount": false
        }],
        "graphs": [{
            "id": "g3",
            "valueAxis": "v1",
            "lineColor": "#F3F8FB",
            "fillColors": "#F3F8FB",
            "fillAlphas": 1,
            "type": "column",
            "title": "Actual Sales",
            "valueField": "sales2",
            "clustered": false,
            "columnWidth": 0.5,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"
        }, {
            "id": "g4",
            "valueAxis": "v1",
            "lineColor": "#5C6DF4",
            "fillColors": "#5C6DF4",
            "fillAlphas": 1,
            "type": "column",
            "title": "Target Sales",
            "valueField": "sales1",
            "clustered": false,
            "columnWidth": 0.3,
            "legendValueText": "$[[value]]M",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>$[[value]]M</small>"
        }, {
            "id": "g1",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#815FF6",
            "type": "smoothedLine",
            "title": "Duration",
            "useLineColorForBulletBorder": true,
            "valueField": "market1",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"
        }, {
            "id": "g2",
            "valueAxis": "v2",
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineThickness": 2,
            "lineColor": "#ffe598",
            "type": "smoothedLine",
            "dashLength": 5,
            "title": "Market Days ALL",
            "useLineColorForBulletBorder": true,
            "valueField": "market2",
            "balloonText": "[[title]]<br /><small style='font-size: 130%'>[[value]]</small>"
        }],
        "chartScrollbar": {
            "graph": "g1",
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 45,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.5,
            "selectedBackgroundColor": "#f9f9f9",
            "graphFillAlpha": 0.1,
            "graphLineAlpha": 0.4,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount": true,
            "color": "#95a1f9"
        },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 0,
            "valueLineAlpha": 0.2
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": true,
            "dashLength": 1,
            "minorGridEnabled": true,
            "color": "#5C6DF4"
        },
        "legend": {
            "useGraphSettings": true,
            "position": "top"
        },
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "export": {
            "enabled": false
        },
        "dataProvider": [{
            "date": "2013-01-16",
            "market1": 51,
            "market2": 55,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-17",
            "market1": 64,
            "market2": 70,
            "sales1": 5,
            "sales2": 6
        }, {
            "date": "2013-01-18",
            "market1": 65,
            "market2": 45,
            "sales1": 8,
            "sales2": 12
        }, {
            "date": "2013-01-19",
            "market1": 73,
            "market2": 75,
            "sales1": 7,
            "sales2": 8
        }, {
            "date": "2013-01-20",
            "market1": 65,
            "market2": 70,
            "sales1": 7,
            "sales2": 10
        }, {
            "date": "2013-01-21",
            "market1": 65,
            "market2": 55,
            "sales1": 9,
            "sales2": 12
        }, {
            "date": "2013-01-22",
            "market1": 68,
            "market2": 62,
            "sales1": 5,
            "sales2": 7
        }, {
            "date": "2013-01-23",
            "market1": 75,
            "market2": 80,
            "sales1": 7,
            "sales2": 10
        }, {
            "date": "2013-01-24",
            "market1": 75,
            "market2": 65,
            "sales1": 7,
            "sales2": 9
        }, {
            "date": "2013-01-25",
            "market1": 75,
            "market2": 69,
            "sales1": 8,
            "sales2": 10
        }, {
            "date": "2013-01-26",
            "market1": 55,
            "market2": 68,
            "sales1": 6,
            "sales2": 7
        }, {
            "date": "2013-01-27",
            "market1": 67,
            "market2": 70,
            "sales1": 3,
            "sales2": 4
        }, {
            "date": "2013-01-28",
            "market1": 62,
            "market2": 59,
            "sales1": 5,
            "sales2": 7
        }, {
            "date": "2013-01-29",
            "market1": 62,
            "market2": 56,
            "sales1": 5,
            "sales2": 8
        }, {
            "date": "2013-01-30",
            "market1": 71,
            "market2": 69,
            "sales1": 4,
            "sales2": 7
        }]
    });
}
//------------echarts2

/*-------------- 11 line chart amchart end ------------*/
