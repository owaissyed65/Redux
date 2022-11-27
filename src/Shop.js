import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { depMoney, remAll, withdrawMoney, addList } from './Redux/action-creator/action'
import Map from './Map'
const Shop = () => {
    const [text, settext] = useState('');
    const dispatch = useDispatch();
    const amount = useSelector(state => state.amount);
    const { dep, withdraw, rem, add } = bindActionCreators({ dep: depMoney, withdraw: withdrawMoney, rem: remAll, add: addList }, dispatch)
    return (
        <div>
            {/* <button onClick={() => { dispatch(depMoney(10)) }}>increament</button>
            <button onClick={() => { dispatch(withdrawMoney(10)) }}>decreament</button> */}
            <button onClick={() => { dep(10) }}>increament</button>
            <button onClick={() => { withdraw(10) }}>decreament</button>
            <button onClick={() => { rem() }}>Discard All Value</button>
            <div> here is the price {amount} </div>
            <div>
                <input type="text" placeholder='Text here' value={text} onChange={(event) => { settext(event.target.value)}} />
                <button onClick={() =>{ add(text); settext('')}}>AddText</button>
                <div>
                    <Map/>
                </div>
            </div>
        </div>
    )
}

export default Shop
