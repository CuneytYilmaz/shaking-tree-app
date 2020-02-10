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
        this.setState({
            isShaking: true,
        })

        setTimeout(() => {
            this.setState({
                isShaking: false,
            })
            this.handleDown();
        }, 3000);
    }

    handleDown() {
        const { dispatch, apples } = this.props;
        let time;

        for (const [index] of apples.entries()) {
            time = ((Math.random() * apples.length) / 2);

            dispatch(setAppleDown(index, { top: '100%', transition: `${time}s` }))

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
    	apples: Object.values(apples).filter(apple => !apple.onBasket),
    }
}

export default connect(mapStateToProps)(Tree);