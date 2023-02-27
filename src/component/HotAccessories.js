import React from 'react'
import HotItemCard from "./HotItemCard.js"
// import "../styles/HotAccessories.css"

const HotAccessories = ({music,musicCover}) => {
  return (
    <div className="HotAccessories">
        <div>
            <img src={musicCover} alt="Cover" />
        </div>
        {/* 2nd wala */}
        <div>
            {
                music.map((item,index)=>(
                    <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index}/>

                
                    ))
            }

        </div>
    </div>
  )
}

export default HotAccessories