import React from 'react';
import Link from "./Link";
import Button from "./Button";

const Header = () => {
    return (
        <header>
            <Link text={'Почта'}/>
            <Link text={'Картинки'}/>
            <Button text={'Аккаунт'}/>
            <Button text={'Меню'}/>
        </header>
    );
};

export default Header;