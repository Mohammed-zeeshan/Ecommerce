import React from 'react'

const List = () => {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
        
        
  return (
    <div>
        <div>
            <h3>MUSIC</h3>
            {productsArr.map((item) => (
                <div>
                    <label>Album 1</label>
                    <img src={item.imageUrl} alt='Products'></img>
                    <p>$ {item.price}</p>
                    <button>ADD TO CART</button>
                </div>
            ))}
        </div>
        <div>
            <h3>MERCH</h3>
        </div>
    </div>
  )
}

export default List