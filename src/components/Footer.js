import React from 'react';
import Link from "./Link";

const Footer = () => {
    return (
        <footer>
            <p>
                Украина
            </p>
            <div className='footer-links'>
                <div className='link-holder'>
                    <Link text = {'Всё о Google'}/>
                    <Link text = {'Реклама'}/>
                    <Link text={'Для бизнеса'}/>
                    <Link text={'Как работает Google Поиск'}/>
                </div>
                <div className='nav-link'>
                    <Link text={'Конфиденциальность'}/>
                    <Link text={'Условия'}/>
                    <Link text={'Настройки'}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;