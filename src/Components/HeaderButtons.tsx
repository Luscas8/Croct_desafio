import React, { ReactElement, useCallback } from 'react';
import { useCroct } from '@croct/plug-react';
import { ContainerHeader } from './style';
import Logo from '../images/croct-logo.png'

export default function HeaderButtons(): ReactElement {
    const croct = useCroct();

    const setPersona = useCallback(
        (setPersona: string) => croct.user.edit()
            .set('custom.persona', setPersona)
            .save().then(() => {
                location.reload()
            }),
        [croct],
    );

    return (
        <ContainerHeader>
            <div>
                <img className='imageLogo' alt='Logo Croct' src={Logo}></img>
            </div>
            <div>
                <a className= 'buttonPersona' onClick={() => setPersona('developer')} >Developer</a>
                <a className='buttonPersona' onClick={() => setPersona('marketer')}>Marketer</a>
                <a className='buttonPersona' onClick={() => setPersona('growth-hacker')}>Growth Hacker</a>
                <a className='buttonPersona' onClick={() => setPersona('other')}>Other</a>
            </div>
        </ContainerHeader>
    );
}
