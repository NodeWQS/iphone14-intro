import React from 'react'
import silver from '../../photos/card_photos/silver.jpg'
import black from '../../photos/card_photos/black.jpg'
import purple from '../../photos/card_photos/purple.jpg'
import gold from '../../photos/card_photos/gold.jpg'
import '../../styles/cards.scss'

export const Cards = () => {
  return (
    <div className='hero_container' id='hero_cards'>
        <div className="info_title">ВЫБЕРИ СВОЙ ЦВЕТ</div>
        <div className="cards">
            <div className="card">
                <div className="card_img">
                    <img src={ silver } alt="" />
                </div>
                <div className="card_text">Silver</div>
            </div>
            <div className="card">
                <div className="card_img">
                    <img src={ purple } alt="" />
                </div>
                <div className="card_text">Deep purple</div>
            </div>
            <div className="card">
                <div className="card_img">
                    <img src={ gold } alt="" />
                </div>
                <div className="card_text">Gold</div>
            </div>
            <div className="card">
                <div className="card_img">
                    <img src={ black } alt="" />
                </div>
                <div className="card_text">Space Black</div>
            </div>
        </div>
    </div>
  )
}
