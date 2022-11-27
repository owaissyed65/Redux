import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delList, remAllLIST } from './Redux/action-creator/action'

const Map = () => {

    const list = useSelector((state) => state.todoList.list)
    const dispatch = useDispatch();
    return (
        <div>
            {list.map((obj) => {
                return (
                    <div key={obj.id} style={{ margin: '1rem' }}>
                        <span>{obj.data}</span><button style={{ marginLeft: '5px' }} onClick={() => { dispatch(delList(obj.id)) }}>Delete</button>
                    </div>
                )
            })}
            <div style={{ marginTop: '10px' }}>
                <button onClick={() => { dispatch(remAllLIST()) }}>Delete All</button>
            </div>
        </div>
    )
}

export default Map
