import React from 'react';
import {WindDirArr} from '../models/windDirection'
import {
    WiDirectionDownLeft,WiDirectionDownRight,WiDirectionDown,
    WiDirectionLeft,WiDirectionRight,
    WiDirectionUpLeft,WiDirectionUpRight,WiDirectionUp
} from 'react-icons/wi';
export function WindDirection(props){
    const windDir = props.windDir;
    let direction = '';
    WindDirArr.forEach(row => {
      const range = row.range;
      const lowerBound = range[0];
      const upperBound = range[1];
      if ((windDir >= lowerBound && windDir <= upperBound) && direction == '') {
        direction = row.direction;
      }
    });
    switch (direction) {
      case 'N':
        return <WiDirectionUp/>
      case 'NE':
        return <WiDirectionUpRight/>
      case 'E':
        return <WiDirectionRight/>
      case 'SE':
        return <WiDirectionDownRight/>
      case 'S':
        return <WiDirectionDown/>
      case 'SW':
        return <WiDirectionDownLeft/>
      case 'W':
        return <WiDirectionLeft/>
      case 'NW':
        return <WiDirectionUpLeft/>
      default:
        return <span>NA</span>
    }
}