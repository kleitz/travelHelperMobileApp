interface ChangeEventValue 
{
    center: Coords;
    zoom: number;
    bounds: Bounds;
    marginBounds: Bounds;
    size: Size;
}

interface ClickEventValue extends Coords
{
    x: number;
    y: number;
    event: Event;
}

interface Maps 
{
    Animation: any;
    ControlPosition: any;
    MapTypeControlStyle: any;
    MapTypeId: any;
    NavigationControlStyle: any;
    ScaleControlStyle: any;
    StrokePosition: any;
    SymbolPath: any;
    ZoomControlStyle: any;
    DirectionsStatus: any;
    DirectionsTravelMode: any;
    DirectionsUnitSystem: any;
    DistanceMatrixStatus: any;
    DistanceMatrixElementStatus: any;
    ElevationStatus: any;
    GeocoderLocationType: any;
    GeocoderStatus: any;
    KmlLayerStats: any;
    MaxZoomStatus: any;
    StreetViewStatus: any;
    TransitMode: any;
    TransitRoutePreference: any;
    TravelMode: any;
    UnitSystem: any;
    places: any;
    LatLng: any;
}
interface Bounds 
{
    nw: Coords;
    ne: Coords;
    sw: Coords;
    se: Coords;
}

interface Coords 
{
    lat: number;
    lng: number;
}

interface Size
{
    height: number;
    width: number;
}


interface Places
{
    address_components:Array<{long_name:string,short_name:string,types:Array<string>}> // name part  [0]="a" [1]="b"
    formatted_address:string;   //  concat by address_components , but not a dom string "a b"
    geometry:{location:{lat:()=>number,lng:()=>number} , viewport:any};
    formatted_phone_number:string;  //The Place's phone number,
    html_attributions:Array<string>; //Attribution text to be displayed for this Place result.
    icon:string; //URL to an image resource that can be used to represent this Place's category
    international_phone_number:string;//phone number in international format.includes the country code, and is prefixed with the plus (+) sign.
    name:string;
    place_id:string;
    price_level:string; //The price level of the Place, on a scale of 0 to 4 0: Free 1: Inexpensive 2: Moderate 3: Expensive 4: Very Expensive
    rating:number //A rating, between 1.0 to 5.0, based on user reviews of this Place.
    types:Array<string> //An array of types (e.g., ["political", "locality"] or ["restaurant", "establishment"]).
    url:string // official Google page for this place. This is the Google-owned page that contains the best available information about the place.
    opening_hours:{open_now:boolean,weekday_text:Array<any>,periods:Array<{close:{day:number,hours:number},open:{day:number,hours:number}}>}
}








function mapOptions(maps: Maps) 
{
    return {
        mapTypeControl: true,
        zoomControl: true,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true,
        fullscreenControl: false,
        zoomControlOptions:
        {
            position: maps.ControlPosition.RIGHT_BOTTOM,
            style: maps.ZoomControlStyle.SMALL
        },
        mapTypeControlOptions:
        {
            position: maps.ControlPosition.LEFT_BOTTOM,
            style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
            mapTypeId: ["HYBRID", "ROADMAP", "SATELLITE", "TERRAIN"]
        },
        streetViewControlOptions:
        {
            position: maps.ControlPosition.RIGHT_BOTTOM,
            style: maps.ZoomControlStyle.SMALL
        },
        rotateControlOptions:
        {
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
    }
}



export { Size, Coords, Bounds, Maps, ClickEventValue, ChangeEventValue, mapOptions ,Places}