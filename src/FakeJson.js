import React from 'react'
import { useSelector } from 'react-redux'

const FakeJson = async () => {
    const data = await useSelector(state => state.fakeApi);
    
    console.log(data)
    return (
        <div>
            {data.map((ele, index) => {
                return (
                    <div key={index}>
                        {ele.data}
                    </div>
                )
            })}
        </div>
    )
}

export default FakeJson
