var map, csv;
require([
    "esri/map",
    "esri/dijit/OverviewMap",
    "esri/layers/CSVLayer",
    "esri/Color",
    "esri/symbols/SimpleMarkerSymbol",
    "esri/renderers/SimpleRenderer",
    "esri/InfoTemplate",
    "esri/dijit/Geocoder",
    "esri/dijit/HomeButton",
    "esri/dijit/BasemapGallery",
    "esri/arcgis/utils",
    "esri/dijit/Scalebar",
    "dojo/parser",
    "dijit/layout/BorderContainer",
    "dijit/layout/ContentPane",
    "dijit/TitlePane",
    "dojo/domReady!"


], function (Map, OverviewMap, CSVLayer, Color, SimpleMarkerSymbol, SimpleRenderer, InfoTemplate, Geocoder, HomeButton, BasemapGallery, arcgisUtils, Scalebar, parser, BorderContainer, ContentPane, TitlePane) {
    parser.parse();
    
    map = new Map("map", {
        center: [-122.5, 45],
        zoom: 8,
        basemap: "gray"
    });


    var marker = new esri.symbol.PictureMarkerSymbol({
        "angle": 0,
        "xoffset": 0,
        "yoffset": 10,
        "type": "esriPMS",
        "url": "Graphics/marker.png",
        "contentType": "image/png",
        "width": 24,
        "height": 24
    });

    csv = new CSVLayer("listBridges.csv");

    var renderer = new SimpleRenderer(marker);
    csv.setRenderer(renderer);
    var template = new esri.dijit.PopupTemplate({
        title: "{Name}",
        fieldInfos: [
            {fieldName: "Cross", visible: true, label: "Crosses:"},
            {fieldName: "Locale", visible: true, label: "Locale:"},
            {fieldName: "Maintained", visible: true, label: "Maintained:"}
        ],
        mediaInfos: [{
                "caption": "<a href={Page Link}> Click to load BridgeDex-profile</a>",
                "type": "image",
                "value": {
                    "sourceURL": "{Image Link}",
                    "linkURL": "{Page Link}"
                }
            }]
    });
    
    template.setTitle("Feature Attributes");
    csv.setInfoTemplate(template);
    map.addLayer(csv);

    var home = new HomeButton({
        map: map
    }, "HomeButton");
    home.startup();

    var basemapGallery = new BasemapGallery({
        showArcGISBasemaps: true,
        map: map
    }, "basemapGallery");
    basemapGallery.startup();

    var overviewMapDijit = new OverviewMap({
        map: map,
        attachTo: "bottom-right",
        visible: false
    });
    overviewMapDijit.startup();

    var scalebar = new Scalebar({
        map: map,
        scalebarUnit: "dual",
        attachTo: "bottom-left"
    });

    geocoder = new Geocoder({
        map: map
    }, "search");
    geocoder.startup();

});


