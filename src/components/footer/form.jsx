import React from 'react'
import '../../styles/form.scss'
import contact_photo from '../../photos/contact.jpg'

export const Form = () => {
  return (
    <div className='hero_container' >
        <div className="contact">
            <div className="contact_body">
                <div className="contact_wrapper">
                    <form action="">
                        <div className="contact_title"><h3>ХОЧЕШЬ IPHONE 14 PRO?</h3></div>
                        <div className="contact_row"><input type="email" placeholder='Ваше имя' /></div>
                        <div className="contact_row"><input type="text" placeholder='Номер телефона' /></div>
                        <span>В ближайшее время наш менеджер свяжется с Вами</span>
                        <button type='submit' className='contact_btn'>ЗАКАЗАТЬ</button>
                    </form>
                </div>
            </div>
            <div className="contact_img">
                <img src={ contact_photo } alt="" />
            </div>
        </div>
    </div>
  )
}
