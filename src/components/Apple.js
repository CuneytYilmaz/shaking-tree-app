import React from 'react';
import apple from '../img/apple.svg';

export default function Apple ({ style }) {
    return (
        <img style={style} src={apple} className='apple' alt='Apple' />
    )
}