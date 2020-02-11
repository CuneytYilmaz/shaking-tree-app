import React from 'react';
import apple from '../img/apple.svg';

// State veya store ihtiyacı olmadığı, sadece UI ile ilgilendiği için Apple component'i functional component olarak oluşturuldu.
export default function Apple ({ style }) {
    return (
        <img style={style} src={apple} className='apple' alt='Apple' />
    )
}