import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAppleDown, setAppleBasket } from '../actions/apples';
import Apple from './Apple'
import tree from '../img/tree.svg';

class Tree extends Component {
    state = {
        isShaking: false,
    }

    handleShake = () => {
        // Ağacın sallanması için butona basılır ve isShaking state'i true'a setlenir.
        this.setState({
            isShaking: true,
        })

        // 3 sn sonra isShaking state'i tekrar false'a setlenir ve ağacın sallanması durur.
        setTimeout(() => {
            this.setState({
                isShaking: false,
            })
            // Ağaç sallandıktan sonra elmaların aşağı düşmesi için handleDown fonksiyonu çağrılır.
            this.handleDown();
        }, 3000);
    }

    handleDown() {
        const { dispatch, apples } = this.props;
        let time;

        // For of ile tüm elmalar dönülür.
        for (const [index] of apples.entries()) {
            // Random süre üretilir.
            time = ((Math.random() * apples.length) / 2);

            // setAppleDown fonksiyonu ile redux'taki action creator çağılır ve ilgili elmanın aşağı düşmesi sağlanır.
            dispatch(setAppleDown(index, { top: '100%', transition: `${time}s` }))

            // Üretilen random süre + 1 sn geçtikten sonra setAppleBasket fonksiyonu ile redux'taki action creator çağırılır ve ilgili elmanın sepete gitmesi için onBasket prop'u true'e setlenir.
            setTimeout(() => {
                dispatch(setAppleBasket(index, { top: '55%', left: `${(index*3)+35}%`, transition: '0.2s' }, true))
            }, (time * 1000) + 1000)
        }
    }

    render () {
        const { apples } = this.props;
        const { isShaking } = this.state;

        return (
            <div>
                <button onClick={this.handleShake} className='btn-shake' disabled={isShaking}>
                    Shake Tree
                </button>
                {/* isShaking state'i aktif olduğu süre boyunca animated.css içerisindeki shake class'ı div'e eklenir */}
                <div className={isShaking ? 'container animated infinite shake slower' : 'container'}>
                    <div className='apples'>
                        {apples.map((apple, index) => 
                            <Apple key={index} style={apple} /> 
                        )}
                    </div>
                    <img src={tree} style={{width: 550, height: 550}} alt={"Tree"}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ apples }) {
	return {
        // Ağaca sadece onBasket prop'u false olan elmaların gelmesi sağlanır. Bu sayede elma sepete düştüğünde artık ağaçta gözükmeyecektir.
    	apples: Object.values(apples).filter(apple => !apple.onBasket),
    }
}

export default connect(mapStateToProps)(Tree);