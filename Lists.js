import React from 'react'
import Item from './Item'

const Lists = (props) => {
  return (
    <div>
        <ul>
            {props.items.map(data => (
                <Item
                    key={data.id}
                    candyName={data.candyName}
                    description={data.description}
                    price={data.price}
                >
                    <label>{data.candyName}  {data.description}  {data.price} </label>
                </Item>
            ))}
        </ul>
    </div>
  )
}

export default Lists