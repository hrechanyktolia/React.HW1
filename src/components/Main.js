import React from 'react';
import Input from "./Input";
import Link from "./Link";
import Button from "./Button";
const Main = () => {
    return (
        <main>
            <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' className='logo'/>
            <Input />
            <div className='button-link-main'>
                <Button text={'Поиск в Google'}/>
                <Button text={'Мне повезёт!'}/>
            </div>
            <p className='info'>Сервисы Google доступны на этих языках:
                <Link text={'Українська'} />
            </p>
        </main>
    );
};

export default Main;