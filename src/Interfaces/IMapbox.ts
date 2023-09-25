export interface IMapbox {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es:   Language;
    place_name_es: string;
    text:          string;
    language:      Language;
    place_name:    string;
    bbox:          number[];
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface IFeatureMapComponent {
    place_name:    string;
    center:        number[];
}

export interface Context {
    id:          string;
    mapbox_id:   string;
    wikidata:    string;
    text_es:     string;
    language_es: Language;
    text:        string;
    language:    Language;
    short_code?: string;
}

export enum Language {
    Es = "es",
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    mapbox_id: string;
    wikidata:  string;
}

export interface IOpenWeatherMap {
    coord:      Coord;
    weather:    Weather[];
    base:       string;
    main:       Main;
    visibility: number;
    wind:       Wind;
    clouds:     Clouds;
    dt:         number;
    sys:        Sys;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}

export interface IOpenWeatherMapComponent {
    name: string;
    lat: number,
    lon: number,
    win_speed: number,
    temperatures: number[],
    clouds: number
}

export interface Clouds {
    all: number;
}

export interface Coord {
    lon: number;
    lat: number;
}

export interface Main {
    temp:       number;
    feels_like: number;
    temp_min:   number;
    temp_max:   number;
    pressure:   number;
    humidity:   number;
}

export interface Sys {
    type:    number;
    id:      number;
    country: string;
    sunrise: number;
    sunset:  number;
}

export interface Weather {
    id:          number;
    main:        string;
    description: string;
    icon:        string;
}

export interface Wind {
    speed: number;
    deg:   number;
}