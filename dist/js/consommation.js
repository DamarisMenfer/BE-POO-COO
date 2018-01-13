

var chart1 = AmCharts.makeChart( "chartdiv1", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [ {
        "title": "",
        "value": 0
    }, {
        "title": "10000KWh",
        "value": 10000
    } ],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,

    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
} );

var chart2 = AmCharts.makeChart( "chartdiv2", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [ {
        "title": "5000KWh",
        "value": 5000
    }, {
        "title": "5000KWh",
        "value": 5000
    } ],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,

    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
} );

var chart3 = AmCharts.makeChart( "chartdiv3", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [ {
        "title": "7000KWh",
        "value": 7000
    }, {
        "title": "3000KWh",
        "value": 3000
    } ],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,

    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
} );

var chart4 = AmCharts.makeChart( "chartdiv4", {
    "type": "pie",
    "theme": "none",
    "dataProvider": [ {
        "title": "2000KWh",
        "value": 2000
    }, {
        "title": "8000KWh",
        "value": 8000
    } ],
    "titleField": "title",
    "valueField": "value",
    "labelRadius": 5,

    "radius": "42%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
} );

var chartData = generateChartData();

function generateChartData() {
    var chartData = [];
    var firstDate = new Date( 2012, 0, 1 );
    firstDate.setDate( firstDate.getDate() - 1000 );
    firstDate.setHours( 0, 0, 0, 0 );

    var a = 2000;

    for ( var i = 0; i < 1000; i++ ) {
        var newDate = new Date( firstDate );
        newDate.setHours( 0, i, 0, 0 );

        a += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        var b = Math.round( Math.random() * 100000000 );

        chartData.push( {
            "date": newDate,
            "value": a,
            "volume": b
        } );
    }
    return chartData;
}

var chart = AmCharts.makeChart( "chartdivGraph", {
    "type": "stock",
    "theme": "light",
    "categoryAxesSettings": {
        "minPeriod": "mm"
    },

    "dataSets": [ {
        "color": "#b0de09",
        "fieldMappings": [ {
            "fromField": "value",
            "toField": "value"
        }, {
            "fromField": "volume",
            "toField": "volume"
        } ],

        "dataProvider": chartData,
        "categoryField": "date"
    } ],

    "panels": [ {
        "showCategoryAxis": false,
        "title": "Value",
        "percentHeight": 70,

        "stockGraphs": [ {
            "id": "g1",
            "valueField": "value",
            "type": "smoothedLine",
            "lineThickness": 2,
            "bullet": "round"
        } ],


        "stockLegend": {
            "valueTextRegular": " ",
            "markerType": "none"
        }
    }, {
        "title": "Volume",
        "percentHeight": 30,
        "stockGraphs": [ {
            "valueField": "volume",
            "type": "column",
            "cornerRadiusTop": 2,
            "fillAlphas": 1
        } ],

        "stockLegend": {
            "valueTextRegular": " ",
            "markerType": "none"
        }
    } ],

    "chartScrollbarSettings": {
        "graph": "g1",
        "usePeriod": "10mm",
        "position": "top"
    },

    "chartCursorSettings": {
        "valueBalloonsEnabled": true
    },

    "periodSelector": {
        "position": "top",
        "dateFormat": "YYYY-MM-DD JJ:NN",
        "inputFieldWidth": 150,
        "periods": [ {
            "period": "hh",
            "count": 1,
            "label": "1 hour"
        }, {
            "period": "hh",
            "count": 2,
            "label": "2 hours"
        }, {
            "period": "hh",
            "count": 5,
            "selected": true,
            "label": "5 hour"
        }, {
            "period": "hh",
            "count": 12,
            "label": "12 hours"
        }, {
            "period": "MAX",
            "label": "MAX"
        } ]
    },

    "panelsSettings": {
        "usePrefixes": true
    },

    "export": {
        "enabled": true,
        "position": "bottom-right"
    }
} );