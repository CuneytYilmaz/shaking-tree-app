import React, { Component } from 'react';
import { connect } from 'react-redux';
import Apple from "./Apple";
import basket from '../img/basket.svg';

class Basket extends Component
{
    render() {
        // Props ile component'e style iletilir.
        const { apples } = this.props;
        
        return(
            <div className='basket'>
                <div className='apples'>
                    <img src={basket} width={200} height={150} alt='Basket' />
                    {/* ES6 Map fonksiyonu ile tüm elmalar dönülür. */}
                    {apples.map((apple, index) => 
                        // ES6 Destructuring ile propstaki tüm style component'in style prop'una geçirilir. 
                        <Apple key={index} style={{...apple, zIndex: 3}} /> 
                    )}
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ apples }) {
	return {
        // Sepette sadece onBasket prop'u true olan elmaların gözükmesi sağlanır. Bu sayede elma sepete düşmediği sürece sepet içerisinde gözükmeyecektir.
    	apples: Object.values(apples).filter(apple => apple.onBasket),
    }
}

export default connect(mapStateToProps)(Basket);