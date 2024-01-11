var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_WIUPIndonesia_1 = new ol.format.GeoJSON();
var features_WIUPIndonesia_1 = format_WIUPIndonesia_1.readFeatures(json_WIUPIndonesia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WIUPIndonesia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WIUPIndonesia_1.addFeatures(features_WIUPIndonesia_1);
var lyr_WIUPIndonesia_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WIUPIndonesia_1, 
                style: style_WIUPIndonesia_1,
                interactive: true,
                title: '<img src="styles/legend/WIUPIndonesia_1.png" /> WIUP Indonesia'
            });
var format_Refactored_2 = new ol.format.GeoJSON();
var features_Refactored_2 = format_Refactored_2.readFeatures(json_Refactored_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Refactored_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Refactored_2.addFeatures(features_Refactored_2);
var lyr_Refactored_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Refactored_2, 
                style: style_Refactored_2,
                interactive: true,
                title: '<img src="styles/legend/Refactored_2.png" /> Refactored'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_WIUPIndonesia_1.setVisible(true);lyr_Refactored_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_WIUPIndonesia_1,lyr_Refactored_2];
lyr_WIUPIndonesia_1.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'IZIN': 'IZIN', 'SOURCE': 'SOURCE', 'TAHAP KEGI': 'TAHAP KEGI', 'LUAS AREA': 'LUAS AREA', 'VISITED': 'VISITED', 'CONTRATED': 'CONTRATED', 'TM': 'TM', 'IM': 'IM', 'ASH': 'ASH', 'VM': 'VM', 'FC': 'FC', 'TS': 'TS', 'GAR': 'GAR', 'ADB': 'ADB', 'DAF': 'DAF', 'RKAB': 'RKAB', 'PRODUCTION': 'PRODUCTION', 'CONTRACTOR': 'CONTRACTOR', 'HAUL RATE': 'HAUL RATE', 'RESERVES': 'RESERVES', 'ROM CAP': 'ROM CAP', 'PIT-JETTY': 'PIT-JETTY', 'JETTY-ANCH': 'JETTY-ANCH', 'JETTY NAME': 'JETTY NAME', 'LOAD RATE': 'LOAD RATE', 'CRUSH CAP': 'CRUSH CAP', 'MAX BARGE': 'MAX BARGE', 'OWNERSHIP': 'OWNERSHIP', });
lyr_Refactored_2.set('fieldAliases', {'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'IZIN': 'IZIN', 'SOURCE': 'SOURCE', 'TAHAP KEGI': 'TAHAP KEGI', 'LUAS AREA': 'LUAS AREA', 'VISITED': 'VISITED', 'CONTRATED': 'CONTRATED', 'TM': 'TM', 'IM': 'IM', 'ASH': 'ASH', 'VM': 'VM', 'FC': 'FC', 'TS': 'TS', 'GAR': 'GAR', 'ADB': 'ADB', 'DAF': 'DAF', 'RKAB': 'RKAB', 'PRODUCTION': 'PRODUCTION', 'CONTRACTOR': 'CONTRACTOR', 'HAUL RATE': 'HAUL RATE', 'RESERVES': 'RESERVES', 'ROM CAP': 'ROM CAP', 'PIT-JETTY': 'PIT-JETTY', 'JETTY-ANCH': 'JETTY-ANCH', 'JETTY NAME': 'JETTY NAME', 'LOAD RATE': 'LOAD RATE', 'CRUSH CAP': 'CRUSH CAP', 'MAX BARGE': 'MAX BARGE', });
lyr_WIUPIndonesia_1.set('fieldImages', {'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'IZIN': 'TextEdit', 'SOURCE': 'TextEdit', 'TAHAP KEGI': 'TextEdit', 'LUAS AREA': 'TextEdit', 'VISITED': 'TextEdit', 'CONTRATED': 'TextEdit', 'TM': 'TextEdit', 'IM': 'TextEdit', 'ASH': 'TextEdit', 'VM': 'TextEdit', 'FC': 'TextEdit', 'TS': 'TextEdit', 'GAR': 'TextEdit', 'ADB': 'TextEdit', 'DAF': 'TextEdit', 'RKAB': 'TextEdit', 'PRODUCTION': 'TextEdit', 'CONTRACTOR': 'TextEdit', 'HAUL RATE': 'TextEdit', 'RESERVES': 'TextEdit', 'ROM CAP': 'TextEdit', 'PIT-JETTY': 'TextEdit', 'JETTY-ANCH': 'TextEdit', 'JETTY NAME': 'TextEdit', 'LOAD RATE': 'TextEdit', 'CRUSH CAP': 'TextEdit', 'MAX BARGE': 'TextEdit', 'OWNERSHIP': '', });
lyr_Refactored_2.set('fieldImages', {'PROVINSI': '', 'KABUPATEN': '', 'IZIN': '', 'SOURCE': '', 'TAHAP KEGI': '', 'LUAS AREA': '', 'VISITED': '', 'CONTRATED': '', 'TM': '', 'IM': '', 'ASH': '', 'VM': '', 'FC': '', 'TS': '', 'GAR': '', 'ADB': '', 'DAF': '', 'RKAB': '', 'PRODUCTION': '', 'CONTRACTOR': '', 'HAUL RATE': '', 'RESERVES': '', 'ROM CAP': '', 'PIT-JETTY': '', 'JETTY-ANCH': '', 'JETTY NAME': '', 'LOAD RATE': '', 'CRUSH CAP': '', 'MAX BARGE': '', });
lyr_WIUPIndonesia_1.set('fieldLabels', {'PROVINSI': 'no label', 'KABUPATEN': 'inline label', 'IZIN': 'inline label', 'SOURCE': 'header label', 'TAHAP KEGI': 'inline label', 'LUAS AREA': 'inline label', 'VISITED': 'inline label', 'CONTRATED': 'inline label', 'TM': 'inline label', 'IM': 'inline label', 'ASH': 'inline label', 'VM': 'inline label', 'FC': 'inline label', 'TS': 'inline label', 'GAR': 'inline label', 'ADB': 'inline label', 'DAF': 'inline label', 'RKAB': 'inline label', 'PRODUCTION': 'inline label', 'CONTRACTOR': 'inline label', 'HAUL RATE': 'inline label', 'RESERVES': 'inline label', 'ROM CAP': 'inline label', 'PIT-JETTY': 'inline label', 'JETTY-ANCH': 'inline label', 'JETTY NAME': 'inline label', 'LOAD RATE': 'inline label', 'CRUSH CAP': 'inline label', 'MAX BARGE': 'inline label', 'OWNERSHIP': 'no label', });
lyr_Refactored_2.set('fieldLabels', {'PROVINSI': 'no label', 'KABUPATEN': 'no label', 'IZIN': 'no label', 'SOURCE': 'no label', 'TAHAP KEGI': 'no label', 'LUAS AREA': 'no label', 'VISITED': 'no label', 'CONTRATED': 'no label', 'TM': 'no label', 'IM': 'no label', 'ASH': 'no label', 'VM': 'no label', 'FC': 'no label', 'TS': 'no label', 'GAR': 'no label', 'ADB': 'no label', 'DAF': 'no label', 'RKAB': 'no label', 'PRODUCTION': 'no label', 'CONTRACTOR': 'no label', 'HAUL RATE': 'no label', 'RESERVES': 'no label', 'ROM CAP': 'no label', 'PIT-JETTY': 'no label', 'JETTY-ANCH': 'no label', 'JETTY NAME': 'no label', 'LOAD RATE': 'no label', 'CRUSH CAP': 'no label', 'MAX BARGE': 'no label', });
lyr_Refactored_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});