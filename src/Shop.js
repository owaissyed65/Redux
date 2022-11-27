import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { depMoney, remAll, withdrawMoney } from './Redux/action-creator/action'
const Shop = () => {
    const dispatch = useDispatch();
    const amount = useSelector(state => state.amount);
    const { dep, withdraw, rem } = bindActionCreators({ dep: depMoney, withdraw: withdrawMoney, rem: remAll }, dispatch)
    return (
        <div>
            {/* <button onClick={() => { dispatch(depMoney(10)) }}>increament</button>
            <button onClick={() => { dispatch(withdrawMoney(10)) }}>decreament</button> */}
            <button onClick={() => { dep(10) }}>increament</button>
            <button onClick={() => { withdraw(10) }}>decreament</button>
            <button onClick={() => { rem() }}>Discard All Value</button>

            <div> here is the price {amount} </div>
        </div>
    )
}

export default Shop
