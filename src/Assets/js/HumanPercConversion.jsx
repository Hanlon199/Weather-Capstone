import React from 'react';
import {humanPercInd} from '../models/humanPerception';
export function HumanPercConv(props){
    const val = props.value;
    let result = '';
    humanPercInd.forEach(row => {
        const range = row.range;
        const lowerBound = range[0];
        const upperBound = range[1];
        if ((val >= lowerBound && val <= upperBound) && result == '') {
            result = row.desc;
        }
    });
    return <span>{result}</span>
}