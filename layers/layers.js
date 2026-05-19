var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Weem_1 = new ol.format.GeoJSON();
var features_Weem_1 = format_Weem_1.readFeatures(json_Weem_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Weem_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Weem_1.addFeatures(features_Weem_1);
var lyr_Weem_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Weem_1, 
                style: style_Weem_1,
                popuplayertitle: 'Weem',
                interactive: true,
    title: 'Weem<br />\
    <img src="styles/legend/Weem_1_0.png" /> Dazzle<br />\
    <img src="styles/legend/Weem_1_1.png" /> Jugala<br />\
    <img src="styles/legend/Weem_1_2.png" /> Lady In Red<br />' });
var format_Springs_2 = new ol.format.GeoJSON();
var features_Springs_2 = format_Springs_2.readFeatures(json_Springs_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Springs_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Springs_2.addFeatures(features_Springs_2);
var lyr_Springs_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Springs_2, 
                style: style_Springs_2,
                popuplayertitle: 'Springs',
                interactive: true,
    title: 'Springs<br />\
    <img src="styles/legend/Springs_2_0.png" /> Dazzle<br />\
    <img src="styles/legend/Springs_2_1.png" /> Lumi<br />' });
var format_Raupare_3 = new ol.format.GeoJSON();
var features_Raupare_3 = format_Raupare_3.readFeatures(json_Raupare_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Raupare_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Raupare_3.addFeatures(features_Raupare_3);
var lyr_Raupare_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Raupare_3, 
                style: style_Raupare_3,
                popuplayertitle: 'Raupare',
                interactive: true,
    title: 'Raupare<br />\
    <img src="styles/legend/Raupare_3_0.png" /> Brookfield<br />\
    <img src="styles/legend/Raupare_3_1.png" /> Galaxy<br />\
    <img src="styles/legend/Raupare_3_2.png" /> Jazz<br />\
    <img src="styles/legend/Raupare_3_3.png" /> Lady In Red<br />\
    <img src="styles/legend/Raupare_3_4.png" /> Pacific Queen<br />\
    <img src="styles/legend/Raupare_3_5.png" /> Pink Lady<br />\
    <img src="styles/legend/Raupare_3_6.png" /> Posy<br />\
    <img src="styles/legend/Raupare_3_7.png" /> Royal Gala<br />' });
var format_Macky_4 = new ol.format.GeoJSON();
var features_Macky_4 = format_Macky_4.readFeatures(json_Macky_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Macky_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Macky_4.addFeatures(features_Macky_4);
var lyr_Macky_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Macky_4, 
                style: style_Macky_4,
                popuplayertitle: 'Macky',
                interactive: true,
    title: 'Macky<br />\
    <img src="styles/legend/Macky_4_0.png" /> Aztec<br />\
    <img src="styles/legend/Macky_4_1.png" /> Brookfield<br />\
    <img src="styles/legend/Macky_4_2.png" /> Candy<br />\
    <img src="styles/legend/Macky_4_3.png" /> Dazzle<br />\
    <img src="styles/legend/Macky_4_4.png" /> Fuji Supreme<br />\
    <img src="styles/legend/Macky_4_5.png" /> Galaxy<br />\
    <img src="styles/legend/Macky_4_6.png" /> Granny Smith<br />' });
var format_Pump_5 = new ol.format.GeoJSON();
var features_Pump_5 = format_Pump_5.readFeatures(json_Pump_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pump_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pump_5.addFeatures(features_Pump_5);
var lyr_Pump_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pump_5, 
                style: style_Pump_5,
                popuplayertitle: 'Pump',
                interactive: false,
                title: '<img src="styles/legend/Pump_5.png" /> Pump'
            });
var format_PowerUG_6 = new ol.format.GeoJSON();
var features_PowerUG_6 = format_PowerUG_6.readFeatures(json_PowerUG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerUG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerUG_6.addFeatures(features_PowerUG_6);
var lyr_PowerUG_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerUG_6, 
                style: style_PowerUG_6,
                popuplayertitle: 'Power UG',
                interactive: false,
                title: '<img src="styles/legend/PowerUG_6.png" /> Power UG'
            });
var format_PowerOH_7 = new ol.format.GeoJSON();
var features_PowerOH_7 = format_PowerOH_7.readFeatures(json_PowerOH_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PowerOH_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PowerOH_7.addFeatures(features_PowerOH_7);
var lyr_PowerOH_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PowerOH_7, 
                style: style_PowerOH_7,
                popuplayertitle: 'Power OH',
                interactive: false,
                title: '<img src="styles/legend/PowerOH_7.png" /> Power OH'
            });
var format_Powerbox_8 = new ol.format.GeoJSON();
var features_Powerbox_8 = format_Powerbox_8.readFeatures(json_Powerbox_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Powerbox_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Powerbox_8.addFeatures(features_Powerbox_8);
var lyr_Powerbox_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Powerbox_8, 
                style: style_Powerbox_8,
                popuplayertitle: 'Power box',
                interactive: false,
                title: '<img src="styles/legend/Powerbox_8.png" /> Power box'
            });
var format_Pole_9 = new ol.format.GeoJSON();
var features_Pole_9 = format_Pole_9.readFeatures(json_Pole_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pole_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pole_9.addFeatures(features_Pole_9);
var lyr_Pole_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pole_9, 
                style: style_Pole_9,
                popuplayertitle: 'Pole',
                interactive: false,
                title: '<img src="styles/legend/Pole_9.png" /> Pole'
            });
var format_Tiles_10 = new ol.format.GeoJSON();
var features_Tiles_10 = format_Tiles_10.readFeatures(json_Tiles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tiles_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tiles_10.addFeatures(features_Tiles_10);
var lyr_Tiles_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tiles_10, 
                style: style_Tiles_10,
                popuplayertitle: 'Tiles',
                interactive: false,
                title: '<img src="styles/legend/Tiles_10.png" /> Tiles'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_Weem_1.setVisible(true);lyr_Springs_2.setVisible(true);lyr_Raupare_3.setVisible(true);lyr_Macky_4.setVisible(true);lyr_Pump_5.setVisible(true);lyr_PowerUG_6.setVisible(true);lyr_PowerOH_7.setVisible(true);lyr_Powerbox_8.setVisible(true);lyr_Pole_9.setVisible(true);lyr_Tiles_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_Weem_1,lyr_Springs_2,lyr_Raupare_3,lyr_Macky_4,lyr_Pump_5,lyr_PowerUG_6,lyr_PowerOH_7,lyr_Powerbox_8,lyr_Pole_9,lyr_Tiles_10];
lyr_Weem_1.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Address': 'Address', 'RPIN': 'RPIN', 'Block_name': 'Block', 'Variety': 'Variety', 'Variety_fu': 'Variety', 'Rootstock': 'Rootstock', 'Planted': 'Planted', 'Trees': 'Trees', 'Spacing': 'Spacing', 'Rows': 'Rows', 'Area_ha': 'Area (ha)', 'Sub_block': 'Sub_block', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Springs_2.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Address': 'Address', 'RPIN': 'RPIN', 'Block_name': 'Block', 'Variety': 'Variety', 'Variety_fu': 'Variety', 'Rootstock': 'Rootstock', 'Planted': 'Planted', 'Trees': 'Trees', 'Spacing': 'Spacing', 'Rows': 'Rows', 'Area_ha': 'Area (ha)', 'Sub_block': 'Sub_block', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Raupare_3.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Address': 'Address', 'RPIN': 'RPIN', 'Block_name': 'Block', 'Variety': 'Variety', 'Variety_fu': 'Variety', 'Rootstock': 'Rootstock', 'Planted': 'Planted', 'Trees': 'Trees', 'Spacing': 'Spacing', 'Rows': 'Rows', 'Area_ha': 'Area (ha)', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Macky_4.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Address': 'Address', 'RPIN': 'RPIN', 'Block_name': 'Block', 'Variety': 'Variety', 'Variety_fu': 'Variety', 'Rootstock': 'Rootstock', 'Planted': 'Planted', 'Trees': 'Trees', 'Spacing': 'Spacing', 'Rows': 'Rows', 'Area_ha': 'Area (ha)', 'Sub_block': 'Sub_block', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Pump_5.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Name': 'Name', 'Id': 'Id', 'layer': 'layer', 'path': 'path', });
lyr_PowerUG_6.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Name': 'Name', 'Shape_Leng': 'Shape_Leng', 'layer': 'layer', 'path': 'path', });
lyr_PowerOH_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Orchard': 'Orchard', 'Property': 'Property', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_Powerbox_8.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Name': 'Name', 'Id': 'Id', 'layer': 'layer', 'path': 'path', });
lyr_Pole_9.set('fieldAliases', {'Orchard': 'Orchard', 'Property': 'Property', 'Name': 'Name', 'layer': 'layer', 'path': 'path', });
lyr_Tiles_10.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', });
lyr_Weem_1.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Address': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Variety': 'TextEdit', 'Variety_fu': 'TextEdit', 'Rootstock': 'TextEdit', 'Planted': 'TextEdit', 'Trees': 'TextEdit', 'Spacing': 'TextEdit', 'Rows': 'TextEdit', 'Area_ha': 'TextEdit', 'Sub_block': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Springs_2.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Address': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Variety': 'TextEdit', 'Variety_fu': 'TextEdit', 'Rootstock': 'TextEdit', 'Planted': 'TextEdit', 'Trees': 'TextEdit', 'Spacing': 'TextEdit', 'Rows': 'TextEdit', 'Area_ha': 'TextEdit', 'Sub_block': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Raupare_3.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Address': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Variety': 'TextEdit', 'Variety_fu': 'TextEdit', 'Rootstock': 'TextEdit', 'Planted': 'TextEdit', 'Trees': 'TextEdit', 'Spacing': 'TextEdit', 'Rows': 'TextEdit', 'Area_ha': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Macky_4.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Address': 'TextEdit', 'RPIN': 'TextEdit', 'Block_name': 'TextEdit', 'Variety': 'TextEdit', 'Variety_fu': 'TextEdit', 'Rootstock': 'TextEdit', 'Planted': 'TextEdit', 'Trees': 'TextEdit', 'Spacing': 'TextEdit', 'Rows': 'TextEdit', 'Area_ha': 'TextEdit', 'Sub_block': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Pump_5.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Name': 'TextEdit', 'Id': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PowerUG_6.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PowerOH_7.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Powerbox_8.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Name': 'TextEdit', 'Id': 'Range', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Pole_9.set('fieldImages', {'Orchard': 'TextEdit', 'Property': 'TextEdit', 'Name': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Tiles_10.set('fieldImages', {'Shape_Leng': 'TextEdit', });
lyr_Weem_1.set('fieldLabels', {'Orchard': 'hidden field', 'Property': 'hidden field', 'Address': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Variety': 'hidden field', 'Variety_fu': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Spacing': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Area_ha': 'inline label - always visible', 'Sub_block': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Springs_2.set('fieldLabels', {'Orchard': 'hidden field', 'Property': 'hidden field', 'Address': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Variety': 'hidden field', 'Variety_fu': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Spacing': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Area_ha': 'inline label - always visible', 'Sub_block': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Raupare_3.set('fieldLabels', {'Orchard': 'hidden field', 'Property': 'hidden field', 'Address': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Variety': 'hidden field', 'Variety_fu': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Spacing': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Area_ha': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Macky_4.set('fieldLabels', {'Orchard': 'hidden field', 'Property': 'hidden field', 'Address': 'inline label - always visible', 'RPIN': 'inline label - always visible', 'Block_name': 'inline label - always visible', 'Variety': 'hidden field', 'Variety_fu': 'inline label - always visible', 'Rootstock': 'inline label - always visible', 'Planted': 'inline label - always visible', 'Trees': 'inline label - always visible', 'Spacing': 'inline label - always visible', 'Rows': 'inline label - always visible', 'Area_ha': 'inline label - always visible', 'Sub_block': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Pump_5.set('fieldLabels', {'Orchard': 'no label', 'Property': 'no label', 'Name': 'no label', 'Id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PowerUG_6.set('fieldLabels', {'Orchard': 'no label', 'Property': 'no label', 'Name': 'no label', 'Shape_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_PowerOH_7.set('fieldLabels', {'Shape_Leng': 'no label', 'Orchard': 'no label', 'Property': 'no label', 'Name': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Powerbox_8.set('fieldLabels', {'Orchard': 'no label', 'Property': 'no label', 'Name': 'no label', 'Id': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Pole_9.set('fieldLabels', {'Orchard': 'no label', 'Property': 'no label', 'Name': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Tiles_10.set('fieldLabels', {'Shape_Leng': 'no label', });
lyr_Tiles_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});