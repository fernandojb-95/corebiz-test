import { useRef, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import '../css/newsletter.css';

const Newsletter = () => {
    const name = useRef();
    const email = useRef();

    const [valName, setValName] = useState({})
    const [valEmail, setValEmail] = useState({})
    const [buttonState, setButtonState] = useState(false)
    const [form, setForm] =useState({status: 'uncomplete', msg: 'Not completed'})

    const fieldValidation = (input) => { 
        
        switch(input.current.name){
            case 'name':
                if(name.current.value.length > 3 ){
                    setValName({
                        status: 'ok',
                        message: ''
                    })
                }
                else{
                    setValName({
                        status: 'no',
                        message: 'Error en el campo nombre'
                    })
                }
            break
            case 'email':
                if(!email.current.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                    setValEmail({
                        status: 'no',
                        message: 'Error en el campo email'
                    })
                }
                else{
                    setValEmail({
                        status: 'ok',
                        message: 'Campo correcto'
                    })
                }
            break;
            default:
                console.log('No existe la opción')
        }      
    }

    useEffect(() => {
        if(valName.status === 'ok' && valEmail.status === 'ok'){
            setButtonState(true);
        } else{
            setButtonState(false);
            setForm({status: 'uncomplete', msg: ''})
        }
    }, [valName, valEmail])

    const submit = (e) => {
        e.preventDefault();
        if(valName.status === 'ok' && valEmail.status === 'ok'){
            const data = {
                email: email.current.value,
                name: name.current.value
            }
            let settings = {
                "method": "POST",
                "headers": {
                    "content-type" : "application/json"
                },
                "body": JSON.stringify(data)
            }
            setForm({status: 'pending', msg: 'Pending'})
            fetch('https://corebiz-test.herokuapp.com/api/v1/newsletter', settings)
                .then(response => response.json())
                .then(message => {
                    setForm({ status:'done', msg: message.message })
                })
                .catch(error => console.log(error))
        }
        else{
            setForm({status: 'uncomplete', msg: ''})
        }
    }

    return(
        <section className='newsletter'>
            <h3 className="news-title">¡Únete a nuestras novedades y promociones!</h3>
            <form className="news-form" onSubmit={submit}>
                <input onInput={() => fieldValidation(name)} type="text" ref={name} name='name' placeholder="Ingresa tu nombre"/>
                <input onInput={() => fieldValidation(email)} type="text" ref={email} name='email' placeholder="Ingresa tu email"/>
                <div className='button'>
                <button type="submit" className={!buttonState ? 'button-unactive': 'button-active'}>Sucribirme</button>
                {
                    form.status === 'pending' && 
                    <img src='https://cutewallpaper.org/21/loading-gif-transparent-background/Bee-Hollow-Farm-beekeeping-classes-and-events-near-Schodack-.gif' className='loader' alt='loader-button' />
                }
                </div>                
                {
                    valName.status !== 'ok' &&
                    <p className='error-msg'>{valName.message}</p>
                }
                                {
                    valEmail.status !== 'ok' &&
                    <p className='error-msg'>{valEmail.message}</p>
                }
                {
                    form.status === 'done' &&
                    <p className='success-msg'>{form.msg}</p>
                }
            </form>
        </section>
    )
}

export default Newsletter;