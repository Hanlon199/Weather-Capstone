import { humanPercInd } from '../../Assets/models/humanPerception';
import { uvIndexes } from '../../Assets/models/uvIndexes';
export const currDataCards = [
    {
      key: 0,
      value: 0,
      title: 'AirTemp_C',
      label: 'Temperature:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Air_temperature',
      metricUnit: '°C',
      imperialUnit: '°F',
      conversionType: 'temperature'
    },
    {
      key: 1,
      value: 0,
      title: 'RH',
      label: 'Humidity:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Relative_humidity',
      metricUnit: '%',
      imperialUnit: '%'
    },
    {
      key: 2,
      value: 0,
      title: 'RainReset',
      label: 'Rainfall:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Precipitation',
      metricUnit: 'L/m2',
      imperialUnit: 'kg/m2',
      conversionType: 'container'
    },
    {
      key: 4,
      value: 0,
      title: 'Barometer_KPa',
      label: 'Barometric Pressure:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Atmospheric_pressure',
      metricUnit: 'kPa',
      imperialUnit: 'in Hg',
      conversionType: 'pressure'
    },
    {
      key: 5,
      value: 0,
      title: 'DewPoint',
      label: 'Dew Point:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Dew_point',
      metricUnit: '°C',
      imperialUnit: '°F',
      conversionType: 'temperature'
    },
    {
      key: 6,
      value: 0,
      title: '6',
      label: 'Human Perception:',
      check: true,
      link:
        'https://en.wikipedia.org/wiki/Dew_point#Relationship_to_human_comfort',
      unit: humanPercInd
    },
    {
      key: 7,
      value: 0,
      title: '7',
      label: 'UV Index:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Ultraviolet_index',
      unit: uvIndexes
    },
    {
      key: 8,
      value: 0,
      title: '7',
      label: 'Snow Accumulation:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Snow',
      metricUnit: 'mm',
      imperialUnit: 'in',
      conversionType: 'length'
    },
    {
      key: 9,
      value: 0,
      title: 'solar',
      label: 'Solar Radiation:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Solar_irradiance',
      metricUnit: 'W/m',
      imperialUnit: 'W/ft',
      conversionType: 'watts'
    },
    {
      key: 10,
      value: 0,
      title: 'WindSpeed_ms',
      label: 'Wind Speed:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Wind_speed',
      metricUnit: 'm/s',
      imperialUnit: 'mph',
      conversionType: 'speed'
    },
    {
      key: 11,
      value: 0,
      title: 'WindDirect_deg',
      label: 'Wind Direction:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Wind_direction',
      unit: 'N'
    },
    {
      key: 12,
      value: 0,
      title: 'WindChill',
      label: 'Wind Chill:',
      check: true,
      link: 'https://en.wikipedia.org/wiki/Wind_chill',
      metricUnit: '°C',
      imperialUnit: '°F',
      conversionType: 'temperature'
    }
  ];