"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapOptions(maps) {
    return {
        mapTypeControl: true,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: false,
        zoomControlOptions: {
            position: maps.ControlPosition.RIGHT_BOTTOM,
            style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions: {
            position: maps.ControlPosition.LEFT_BOTTOM,
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeId: ["HYBRID", "ROADMAP", "SATELLITE", "TERRAIN"]
        },
        streetViewControlOptions: {
            position: maps.ControlPosition.RIGHT_BOTTOM,
            style: maps.ZoomControlStyle.SMALL
        },
        rotateControlOptions: {
            position: maps.ControlPosition.RIGHT_BOTTOM,
            style: maps.ZoomControlStyle.SMALL
        },
        styles: // google map react default to off this feature , it make me debug a hour!
        [
            {
                featureType: 'all',
                elementType: 'all',
                stylers: [{ visibility: 'on' }],
            },
        ],
    };
}
exports.mapOptions = mapOptions;
