import React, { useState, useEffect, useRef } from 'react'
import mING from '../assets/app.jpg'
import './App.scss'
import * as S from './Styled'
function App() {
    let [count, setCount] = useState(0)
    let [name, setName] = useState(
        window.localStorage.getItem('name') || 'Brian'
    )

    let nameRef = useRef()

    const decrement = () => setCount((count -= 1))
    const increment = () => setCount((count += 1))

    const submitRefButton = () => setName(nameRef.current.value)

    useEffect(() => {
        window.localStorage.setItem('name', name)
    }, [name])

    return (
        <div className='App'>
            <img src={mING}></img>
            <p data-testid='countvalue'>{count}</p>
            <button
                data-testid='decrementButton'
                type='button'
                onClick={decrement}
            >
                -
            </button>
            <button
                data-testid='incrementButton'
                type='button'
                onClick={increment}
            >
                +
            </button>
            <div>
                <h2>Testing useRef</h2>
                <p data-testid='nameValue'>{name}</p>
                <input data-testid='inputName' ref={nameRef} type='text' />
                <button
                    data-testid='submitRefButton'
                    type='button'
                    onClick={submitRefButton}
                >
                    Submit
                </button>
            </div>
            <h2 className='number'>123456789</h2>
            <h1>Styled components</h1>
            <S.Bg>
                asdf
            </S.Bg>
        </div>
    )
}

export default App
