import React, { Component } from 'react';
import { connect } from 'react-redux';
import Apple from "./Apple";
import basket from '../img/basket.svg';

class Basket extends Component
{
    render() {
        const { apples } = this.props;
        
        return(
            <div className='basket'>
                <div className='apples'>
                    <img src={basket} width={200} height={150} alt='Basket' />
                    {apples.map((apple, index) => 
                            <Apple key={index} style={{...apple, zIndex: 3}} /> 
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ apples }) {
	return {
    	apples: Object.values(apples).filter(apple => apple.onBasket),
    }
}

export default connect(mapStateToProps)(Basket);