import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAppleReset } from '../actions/apples';

class Nav extends Component {  
    handleRestart = () => {
        const { dispatch, applesCount, onBasketCount } = this.props

        // Ağaç sallanırken Restart butonuna basıldığında animasyonun durmaması için aşağıdaki if statement'ı eklendi.
        // Sadece tüm elmalar sepette olduğu zaman Restart butonu ile elmaların ilk pozisyonlarının alması sağlandı.
        if ( applesCount === onBasketCount) {
            dispatch(setAppleReset())
        } 
    }

	render () {
    	return(
        	<nav className='nav'>
              <ul>
                <li className='left'>
                    <h2 className='m-0'>Shaking Tree App</h2>
                </li>
                <li className='right'>
					<button onClick={this.handleRestart} className='btn-restart'>
						Restart
					</button>
                </li>
              </ul>
           </nav>
        );
    }
} 

function mapStateToProps ({ apples }) {
    // Store'dan tüm elmaların sayısı ile sepetteki elmaların sayısı props olarak alınıp component'e geçirildi.
	return {
        applesCount: Object.keys(apples).length,
        onBasketCount: Object.values(apples).filter(apple => apple.onBasket).length,
    }
}

export default connect(mapStateToProps)(Nav);