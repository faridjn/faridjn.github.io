var map;
var zoom;
var level;
$('.radio-layers').bind('click', function () {
    var year = [parseInt($(this)[0].id)];
});

var L2 = 28;
var L3 = 31;
var L4 = 33;
var L5 = 34;

var lods = [
    {"level": 0, "scale": 3000000, "resolution": 793.75158750317507},
    {"level": 1, "scale": 2000000, "resolution": 529.167725002116},
    {"level": 2, "scale": 1000000, "resolution": 264.583862501058},
    {"level": 3, "scale": 500000, "resolution": 132.291931250529},
    {"level": 4, "scale": 250000, "resolution": 66.1459656252645},
    {"level": 5, "scale": 125000, "resolution": 33.0729828126322},
    {"level": 6, "scale": 50000, "resolution": 13.2291931250529},
    {"level": 7, "scale": 30000, "resolution": 7.93751587503175},
    {"level": 8, "scale": 12500, "resolution": 3.30729828126322},
    {"level": 9, "scale": 5000, "resolution": 1.32291931250529},
    {"level": 10, "scale": 2500, "resolution": 0.661459656252645},
    {"level": 11, "scale": 1000, "resolution": 0.264583862501058},
    {"level": 12, "scale": 500, "resolution": 0.132291931250529},
    {"level": 13, "scale": 250, "resolution": 0.0661459656252645},
    {"level": 14, "scale": 100, "resolution": 0.0264583862501058},
    {"level": 15, "scale": 51.932690695019, "resolution": 0.0138940720685454},
    {"level": 16, "scale": 24.1660431071863, "resolution": 0.00646538317289663},
    {"level": 17, "scale": 11.2452798351617, "resolution": 0.00300856216709916},
    {"level": 18, "scale": 5.23281027060198, "resolution": 0.00139998605979685},
    {"level": 19, "scale": 2.43500417326198, "resolution": 0.00065146101651451},
    {"level": 20, "scale": 1.13309006388285, "resolution": 0.000303146915691219},
    {"level": 21, "scale": 0.527265253574545, "resolution": 0.000141064545941334},
    {"level": 22, "scale": 0.245354413112011, "resolution": 6.56421196839874E-05},
    {"level": 23, "scale": 0.114171733535308, "resolution": 3.05455055900363E-05},
    {"level": 24, "scale": 0.0531279815721367, "resolution": 1.42138601898094E-05},
    {"level": 25, "scale": 0.0247222525096932, "resolution": 6.61419143644332E-06},
    {"level": 26, "scale": 0.0115041029428751, "resolution": 3.07780770133681E-06},
    {"level": 27, "scale": 0.00535324944474125, "resolution": 1.43220835644607E-06},
    {"level": 28, "scale": 0.0024910486076075, "resolution": 6.66455144479311E-07},
    {"level": 29, "scale": 0.00115916944082609, "resolution": 3.10124192198613E-07},
    {"level": 30, "scale": 0.000539400872564902, "resolution": 1.44311309446014E-07},
    {"level": 31, "scale": 0.0002510015284016, "resolution": 6.71529489085642E-08},
    {"level": 32, "scale": 0.000116799527891677, "resolution": 3.12485456921394E-08},
    {"level": 33, "scale": 5.43507834497782E-05, "resolution": 1.45410086041537E-08},
    {"level": 34, "scale": 2.52912637142189E-05, "resolution": 6.76642469410213E-09},
    {"level": 35, "scale": 1.17688831634455E-05, "resolution": 3.14864700154821E-09}
];


require(["esri/map",
    "esri/dijit/HomeButton",
    "esri/layers/LOD",
    "esri/dijit/BasemapLayer",
    "esri/layers/ArcGISImageServiceLayer",
    "esri/layers/ImageServiceParameters",
    "dojo/dom", "dojo/domReady!"


], function (Map, HomeButton, LOD, BasemapLayer, ArcGISImageServiceLayer, ImageServiceParameters, dom) {

    var params = new ImageServiceParameters();
    params.noData = 1;

    map = new Map("map", {
        center: [-121.901, 45.663],
        zoom: 25,
        lods: lods
    });

    // ------ overal views -------

    var yr12_L5a = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr12_L5a/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr12_L4a = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr12_L4a/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });
    var yr12_L3b = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr12_L3b/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr12_L3a = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr12_L3a/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr12_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr12_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr10_L5a = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr10_L5a/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr10_L4a = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr10_L4a/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr10_L3b = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr10_L3b/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr10_L3a = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr10_L3a/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr10_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr10_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr08_L5 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr08_L5/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });
    var yr08_L4 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr08_L4/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });
    var yr08_L3 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr08_L3/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr08_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr08_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr06_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr06_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr04_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr04_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr02_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr02_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr00_L2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr00_L2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr_4 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr_4/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr_1 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr_1/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr_2 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr_2/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });

    var yr_3 = new ArcGISImageServiceLayer("http://arcweld.engr.oregonstate.edu:6080/arcgis/rest/services//Bridge_GeoRef/yr_3/ImageServer", {
        imageServiceParameters: params,
        opacity: 1.0
    });


    // ========================================== MAP DOWN ====================================================

    // ========================================== ON-CLICK ====================================================


    map.addLayer(yr_1);

    map.on("extent-change", function () {
        level = map.getLevel();
        console.log(level);

        if (level < L2) {
            map.removeLayer(yr00_L2);
            map.removeLayer(yr02_L2);
            map.removeLayer(yr04_L2);
            map.removeLayer(yr06_L2);
            map.removeLayer(yr08_L2);
            map.removeLayer(yr08_L3);
            map.removeLayer(yr08_L4);
            map.removeLayer(yr08_L5);
            map.removeLayer(yr10_L2);
            map.removeLayer(yr10_L3a);
            map.removeLayer(yr10_L3b);
            map.removeLayer(yr10_L4a);
            map.removeLayer(yr10_L5a);
            map.removeLayer(yr12_L2);
            map.removeLayer(yr12_L3a);
            map.removeLayer(yr12_L3b);
            map.removeLayer(yr12_L4a);
            map.removeLayer(yr12_L5a);
            map.removeLayer(yr12_L2);

        } else if (level >= L2 && level < L3) {
            map.removeLayer(yr08_L3);
            map.removeLayer(yr08_L4);
            map.removeLayer(yr08_L5);
            map.removeLayer(yr10_L3a);
            map.removeLayer(yr10_L3b);
            map.removeLayer(yr10_L4a);
            map.removeLayer(yr10_L5a);
            map.removeLayer(yr12_L3a);
            map.removeLayer(yr12_L3b);
            map.removeLayer(yr12_L4a);
            map.removeLayer(yr12_L5a);

            switch (year) {
                case 0:
                    map.addLayer(yr00_L2);
                    map.removeLayer(yr02_L2);
                    map.removeLayer(yr04_L2);
                    map.removeLayer(yr06_L2);
                    map.removeLayer(yr08_L2);
                    map.removeLayer(yr10_L2);
                    map.removeLayer(yr12_L2);
                    break;

                case 2:
                    map.addLayer(yr02_L2);
                    map.removeLayer(yr00_L2);
                    map.removeLayer(yr04_L2);
                    map.removeLayer(yr06_L2);
                    map.removeLayer(yr08_L2);
                    map.removeLayer(yr10_L2);
                    map.removeLayer(yr12_L2);
                    break;

                case 4:
                    map.addLayer(yr04_L2);
                    map.removeLayer(yr00_L2);
                    map.removeLayer(yr02_L2);
                    map.removeLayer(yr06_L2);
                    map.removeLayer(yr08_L2);
                    map.removeLayer(yr10_L2);
                    map.removeLayer(yr12_L2);
                    break;

                case 6:
                    map.addLayer(yr06_L2);
                    map.removeLayer(yr00_L2);
                    map.removeLayer(yr02_L2);
                    map.removeLayer(yr04_L2);
                    map.removeLayer(yr08_L2);
                    map.removeLayer(yr10_L2);
                    map.removeLayer(yr12_L2);
                    break;

                case 8:
                    map.addLayer(yr08_L2);
                    map.removeLayer(yr00_L2);
                    map.removeLayer(yr02_L2);
                    map.removeLayer(yr04_L2);
                    map.removeLayer(yr06_L2);
                    map.removeLayer(yr10_L2);
                    map.removeLayer(yr12_L2);
                    break;

                case 10:
                    map.addLayer(yr10_L2);
                    map.removeLayer(yr00_L2);
                    map.removeLayer(yr02_L2);
                    map.removeLayer(yr04_L2);
                    map.removeLayer(yr06_L2);
                    map.removeLayer(yr08_L2);
                    map.removeLayer(yr12_L2);
                    break;

                case 12:
                    map.addLayer(yr12_L2);
                    map.removeLayer(yr00_L2);
                    map.removeLayer(yr02_L2);
                    map.removeLayer(yr04_L2);
                    map.removeLayer(yr06_L2);
                    map.removeLayer(yr08_L2);
                    map.removeLayer(yr10_L2);

                    break;
            }


        } else if (level >= L3 && level < L4) {
            map.removeLayer(yr08_L4);
            map.removeLayer(yr08_L5);
            map.removeLayer(yr10_L4a);
            map.removeLayer(yr10_L5a);
            map.removeLayer(yr12_L4a);
            map.removeLayer(yr12_L5a);

            switch (year) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 8:
                    map.addLayer(yr08_L3);
                    break;

                case 10:
                    map.addLayer(yr10_L3a);
                    map.addLayer(yr10_L3b);
                    break;

                case 12:
                    map.addLayer(yr12_L3a);
                    map.addLayer(yr12_L3b);
                    break;
            }

        } else if (level >= L4 && level < L5) {
            map.removeLayer(yr08_L5);
            map.removeLayer(yr10_L5a);
            map.removeLayer(yr12_L5a);

            switch (year) {
                case 0:
                case 2:
                case 4:
                case 6:
                case 8:
                    map.addLayer(yr08_L4);
                    break;

                case 10:
                    map.addLayer(yr10_L4a);
                    break;

                case 12:
                    map.addLayer(yr12_L4a);
                    break;
            }

        } else if (level >= L5) {
            switch (year) {
                case 8:
                    map.addLayer(yr08_L5);
                    break;

                case 10:
                    map.addLayer(yr10_L5a);
                    break;

                case 12:
                    map.addLayer(yr12_L5a);
                    break;
            }
        } else {
        }

    });



    $('.radio-layers').bind('click', function () {
        year = parseInt($(this)[0].id);
        console.log(year);

        switch (year) {
            case 0:
                map.removeAllLayers();
                map.addLayer(yr_1);

                if (level >= L2 && level < L3) {
                    map.addLayer(yr00_L2);

                } else if (level >= L3 && level < L4) {

                } else if (level >= L4 && level < L5) {

                } else if (level >= L5) {

                } else {
                }
                break;

            case 2:
                map.removeAllLayers();
                map.addLayer(yr_1);
                if (level >= L2 && level < L3) {
                    map.addLayer(yr02_L2);
                } else if (level >= L3 && level < L4) {

                } else if (level >= L4 && level < L5) {

                } else if (level >= L5) {

                } else {
                }

                break;

            case 4:
                map.removeAllLayers();
                map.addLayer(yr_2);
                if (level >= L2 && level < L3) {
                    map.addLayer(yr04_L2);

                } else if (level >= L3 && level < L4) {

                } else if (level >= L4 && level < L5) {

                } else if (level >= L5) {

                } else {
                }
                break;

            case 6:
                map.removeAllLayers();
                map.addLayer(yr_2);
                if (level >= L2 && level < L3) {
                    map.addLayer(yr06_L2);

                } else if (level >= L3 && level < L4) {

                } else if (level >= L4 && level < L5) {

                } else if (level >= L5) {

                } else {
                }
                break;

            case 8:
                map.removeAllLayers();
                map.addLayer(yr_3);
                if (level >= L2 && level < L3) {
                    map.addLayer(yr08_L2);

                } else if (level >= L3 && level < L4) {
                    map.addLayer(yr08_L3);

                } else if (level >= L4 && level < L5) {
                    map.addLayer(yr08_L4);

                } else if (level >= L5) {
                    map.addLayer(yr08_L5);

                } else {
                }
                break;

            case 10:
                map.removeAllLayers();
                map.addLayer(yr_3);
                if (level >= L2 && level < L3) {
                    map.addLayer(yr10_L2);

                } else if (level >= L3 && level < L4) {
                    map.addLayer(yr10_L3a);
                    map.addLayer(yr10_L3b);
                } else if (level >= L4 && level < L5) {
                    map.addLayer(yr10_L4a);

                } else if (level >= L5) {
                    map.addLayer(yr10_L5a);

                } else {
                }
                break;

            case 12:
                map.removeAllLayers();
                map.addLayer(yr_4);
                if (level >= L2 && level < L3) {
                    map.addLayer(yr12_L2);

                } else if (level >= L3 && level < L4) {
                    map.addLayer(yr12_L3a);
                    map.addLayer(yr12_L3b);
                } else if (level >= L4 && level < L5) {
                    map.addLayer(yr12_L4a);

                } else if (level >= L5) {
                    map.addLayer(yr12_L5a);

                } else {
                }
                break;
        } //switch

    });
});