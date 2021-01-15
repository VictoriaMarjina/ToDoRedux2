import React from 'react';

const SignUpPage = props => {
    return (
        <div className={'wrapper_sign-up-page'}>
            <div className={'sign-up-page_overlay'}/>
            <div className={'sign-up-page_container'}>
                <div className={'container_header'}/>
                <div className={'container_content'}>
                    <form>
                        <input type={'text'}
                               placeholder={'Введите логин...'}
                        />
                        <input type={'password'}
                               placeholder={'Введите пароль'}
                        />
                        <input type={'password'}
                               placeholder={'Подтвердите пароль'}
                        />
                        <button type={'submit'}
                                children={'Sign Up'}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default React.memo(SignUpPage);
