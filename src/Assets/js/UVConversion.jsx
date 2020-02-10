import React from 'react';
import {uvIndexes} from '../models/uvIndexes';
export function UVConversion(props){
    const val = props.value;
    let result = '';
    uvIndexes.forEach(row => {
        const range = row.range;
        // let lowerBound = row.range[0] === -1000 ? row.range[0] : null;
        // let upperBound = row.range[1] === 1000  ? row.range[1] : null;
        // let addCheck = false;
        
        if ((range.indexOf(val) > -1) && result == '') {
            result = row.desc;
        }
    });
    return <span>{result}</span>
}