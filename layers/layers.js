var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_allentownNeighborhoodDivisions_1 = new ol.format.GeoJSON();
var features_allentownNeighborhoodDivisions_1 = format_allentownNeighborhoodDivisions_1.readFeatures(json_allentownNeighborhoodDivisions_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allentownNeighborhoodDivisions_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allentownNeighborhoodDivisions_1.addFeatures(features_allentownNeighborhoodDivisions_1);
var lyr_allentownNeighborhoodDivisions_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allentownNeighborhoodDivisions_1, 
                style: style_allentownNeighborhoodDivisions_1,
                popuplayertitle: 'allentownNeighborhoodDivisions',
                interactive: true,
                title: '<img src="styles/legend/allentownNeighborhoodDivisions_1.png" /> allentownNeighborhoodDivisions'
            });
var format_allentownCommonFloodSpaces_2 = new ol.format.GeoJSON();
var features_allentownCommonFloodSpaces_2 = format_allentownCommonFloodSpaces_2.readFeatures(json_allentownCommonFloodSpaces_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allentownCommonFloodSpaces_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allentownCommonFloodSpaces_2.addFeatures(features_allentownCommonFloodSpaces_2);
var lyr_allentownCommonFloodSpaces_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allentownCommonFloodSpaces_2, 
                style: style_allentownCommonFloodSpaces_2,
                popuplayertitle: 'allentownCommonFloodSpaces',
                interactive: true,
                title: '<img src="styles/legend/allentownCommonFloodSpaces_2.png" /> allentownCommonFloodSpaces'
            });
var format_allentownStormOutfalls_3 = new ol.format.GeoJSON();
var features_allentownStormOutfalls_3 = format_allentownStormOutfalls_3.readFeatures(json_allentownStormOutfalls_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allentownStormOutfalls_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allentownStormOutfalls_3.addFeatures(features_allentownStormOutfalls_3);
var lyr_allentownStormOutfalls_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allentownStormOutfalls_3, 
                style: style_allentownStormOutfalls_3,
                popuplayertitle: 'allentownStormOutfalls',
                interactive: true,
                title: '<img src="styles/legend/allentownStormOutfalls_3.png" /> allentownStormOutfalls'
            });
var format_allentownStormInlets_4 = new ol.format.GeoJSON();
var features_allentownStormInlets_4 = format_allentownStormInlets_4.readFeatures(json_allentownStormInlets_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_allentownStormInlets_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allentownStormInlets_4.addFeatures(features_allentownStormInlets_4);
var lyr_allentownStormInlets_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allentownStormInlets_4, 
                style: style_allentownStormInlets_4,
                popuplayertitle: 'allentownStormInlets',
                interactive: true,
                title: '<img src="styles/legend/allentownStormInlets_4.png" /> allentownStormInlets'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_allentownNeighborhoodDivisions_1.setVisible(true);lyr_allentownCommonFloodSpaces_2.setVisible(true);lyr_allentownStormOutfalls_3.setVisible(true);lyr_allentownStormInlets_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_allentownNeighborhoodDivisions_1,lyr_allentownCommonFloodSpaces_2,lyr_allentownStormOutfalls_3,lyr_allentownStormInlets_4];
lyr_allentownNeighborhoodDivisions_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'GlobalID': 'GlobalID', });
lyr_allentownCommonFloodSpaces_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'flood freq': 'flood freq', });
lyr_allentownStormOutfalls_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SWO_PERMIT_NUMBER': 'SWO_PERMIT_NUMBER', 'ID_MAP': 'ID_MAP', 'ID_NPDES': 'ID_NPDES', 'BaseLine': 'BaseLine', 'Station': 'Station', 'Offset_': 'Offset_', 'StructureID': 'StructureID', 'StructureType': 'StructureType', 'OUTLET_TYPE': 'OUTLET_TYPE', 'OUTLET_MATERIAL': 'OUTLET_MATERIAL', 'ELEVATION': 'ELEVATION', 'SWO_DEBRIS_GRILL_FLAG': 'SWO_DEBRIS_GRILL_FLAG', 'INSTALL_DATE': 'INSTALL_DATE', 'PIPELOCATION': 'PIPELOCATION', 'PIPE_DIAMETER': 'PIPE_DIAMETER', 'WaterShed': 'WaterShed', 'NOTES': 'NOTES', 'CREATEDBY': 'CREATEDBY', 'CREATEDON': 'CREATEDON', 'MODIFIEDBY': 'MODIFIEDBY', 'MODIFIEDON': 'MODIFIEDON', 'GlobalID': 'GlobalID', 'LucityID': 'LucityID', 'created_user': 'created_user', 'created_date': 'created_date', 'last_edited_user': 'last_edited_user', 'last_edited_date': 'last_edited_date', 'Ownership': 'Ownership', 'MaintenanceAuthority': 'MaintenanceAuthority', 'Inspections_frequency': 'Inspections_frequency', });
lyr_allentownStormInlets_4.set('fieldAliases', {'StructureID': 'StructureID', 'WaterShed': 'WaterShed', 'OBJECTID': 'OBJECTID', 'ELEVGRATE': 'ELEVGRATE', 'LIFECYCLESTATUS': 'LIFECYCLESTATUS', 'StructureType': 'StructureType', 'INSTALLDATE': 'INSTALLDATE', 'ELEVCURBTOP': 'ELEVCURBTOP', 'ELEVDEPTH': 'ELEVDEPTH', 'ELEV_OUT': 'ELEV_OUT', 'DISTRICT': 'DISTRICT', 'PLAN_': 'PLAN_', 'NOTES': 'NOTES', 'STANDING_WATER': 'STANDING_WATER', 'EMBLEM': 'EMBLEM', 'LINK': 'LINK', 'CREATEDBY': 'CREATEDBY', 'CREATEDON': 'CREATEDON', 'MODIFIEDBY': 'MODIFIEDBY', 'MODIFIEDON': 'MODIFIEDON', 'LucityID': 'LucityID', 'Owner': 'Owner', 'GlobalID': 'GlobalID', });
lyr_allentownNeighborhoodDivisions_1.set('fieldImages', {'OBJECTID': 'Range', 'AREA': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_allentownCommonFloodSpaces_2.set('fieldImages', {'id': 'TextEdit', 'name': '', 'flood freq': '', });
lyr_allentownStormOutfalls_3.set('fieldImages', {'OBJECTID': 'Range', 'SWO_PERMIT_NUMBER': 'TextEdit', 'ID_MAP': 'TextEdit', 'ID_NPDES': 'TextEdit', 'BaseLine': 'TextEdit', 'Station': 'TextEdit', 'Offset_': 'TextEdit', 'StructureID': 'TextEdit', 'StructureType': 'Range', 'OUTLET_TYPE': 'Range', 'OUTLET_MATERIAL': 'TextEdit', 'ELEVATION': 'TextEdit', 'SWO_DEBRIS_GRILL_FLAG': 'TextEdit', 'INSTALL_DATE': 'TextEdit', 'PIPELOCATION': 'TextEdit', 'PIPE_DIAMETER': 'Range', 'WaterShed': 'TextEdit', 'NOTES': 'TextEdit', 'CREATEDBY': 'TextEdit', 'CREATEDON': 'TextEdit', 'MODIFIEDBY': 'TextEdit', 'MODIFIEDON': 'TextEdit', 'GlobalID': 'TextEdit', 'LucityID': 'Range', 'created_user': 'TextEdit', 'created_date': 'TextEdit', 'last_edited_user': 'TextEdit', 'last_edited_date': 'TextEdit', 'Ownership': 'TextEdit', 'MaintenanceAuthority': 'TextEdit', 'Inspections_frequency': 'TextEdit', });
lyr_allentownStormInlets_4.set('fieldImages', {'StructureID': 'TextEdit', 'WaterShed': 'TextEdit', 'OBJECTID': 'Range', 'ELEVGRATE': 'TextEdit', 'LIFECYCLESTATUS': 'TextEdit', 'StructureType': 'Range', 'INSTALLDATE': 'TextEdit', 'ELEVCURBTOP': 'TextEdit', 'ELEVDEPTH': 'TextEdit', 'ELEV_OUT': 'TextEdit', 'DISTRICT': 'TextEdit', 'PLAN_': 'TextEdit', 'NOTES': 'TextEdit', 'STANDING_WATER': 'TextEdit', 'EMBLEM': 'TextEdit', 'LINK': 'TextEdit', 'CREATEDBY': 'TextEdit', 'CREATEDON': 'TextEdit', 'MODIFIEDBY': 'TextEdit', 'MODIFIEDON': 'TextEdit', 'LucityID': 'Range', 'Owner': 'Range', 'GlobalID': 'TextEdit', });
lyr_allentownNeighborhoodDivisions_1.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'GlobalID': 'no label', });
lyr_allentownCommonFloodSpaces_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'flood freq': 'no label', });
lyr_allentownStormOutfalls_3.set('fieldLabels', {'OBJECTID': 'no label', 'SWO_PERMIT_NUMBER': 'no label', 'ID_MAP': 'no label', 'ID_NPDES': 'no label', 'BaseLine': 'no label', 'Station': 'no label', 'Offset_': 'no label', 'StructureID': 'no label', 'StructureType': 'no label', 'OUTLET_TYPE': 'no label', 'OUTLET_MATERIAL': 'no label', 'ELEVATION': 'no label', 'SWO_DEBRIS_GRILL_FLAG': 'no label', 'INSTALL_DATE': 'no label', 'PIPELOCATION': 'no label', 'PIPE_DIAMETER': 'no label', 'WaterShed': 'no label', 'NOTES': 'no label', 'CREATEDBY': 'no label', 'CREATEDON': 'no label', 'MODIFIEDBY': 'no label', 'MODIFIEDON': 'no label', 'GlobalID': 'no label', 'LucityID': 'no label', 'created_user': 'no label', 'created_date': 'no label', 'last_edited_user': 'no label', 'last_edited_date': 'no label', 'Ownership': 'no label', 'MaintenanceAuthority': 'no label', 'Inspections_frequency': 'no label', });
lyr_allentownStormInlets_4.set('fieldLabels', {'StructureID': 'no label', 'WaterShed': 'no label', 'OBJECTID': 'no label', 'ELEVGRATE': 'no label', 'LIFECYCLESTATUS': 'no label', 'StructureType': 'no label', 'INSTALLDATE': 'no label', 'ELEVCURBTOP': 'no label', 'ELEVDEPTH': 'no label', 'ELEV_OUT': 'no label', 'DISTRICT': 'no label', 'PLAN_': 'no label', 'NOTES': 'no label', 'STANDING_WATER': 'no label', 'EMBLEM': 'no label', 'LINK': 'no label', 'CREATEDBY': 'no label', 'CREATEDON': 'no label', 'MODIFIEDBY': 'no label', 'MODIFIEDON': 'no label', 'LucityID': 'no label', 'Owner': 'no label', 'GlobalID': 'no label', });
lyr_allentownStormInlets_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});