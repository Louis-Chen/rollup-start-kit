import React, { useState, useEffect, useRef } from 'react'
import { css } from 'emotion'
import styled from '@emotion/styled'

const Styled = styled.div`
    height: 100px;
    width: 100px;
    background-color: gainsboro;
`
function App() {
    let [count, setCount] = useState(0)
    let [name, setName] = useState(
        window.localStorage.getItem('name') || 'Brian',
    )

    let nameRef = useRef()

    const decrement = () => setCount((count -= 1))
    const increment = () => setCount((count += 1))

    const submitRefButton = () => setName(nameRef.current.value)

    useEffect(() => {
        window.localStorage.setItem('name', name)
    }, [name])

    return (
        <div
            className={css`
                width: 100%;
                height: 300px;
                background-color: antiquewhite;
                h2 {
                    color: blue;
                }
                img {
                    height: 100px;
                    width: 100%;
                    content: url('images/app.jpg');
                }
                p {
                    font-size: 20px;
                    color: red;
                }
                .number {
                    font-family: 'FIVExNINEled';
                }
            `}
        >
            <p data-testid="countvalue">{count}</p>
            <button
                data-testid="decrementButton"
                type="button"
                onClick={decrement}
            >
                -
            </button>
            <button
                data-testid="incrementButton"
                type="button"
                onClick={increment}
            >
                +
            </button>
            <div>
                <h2>Testing useRef</h2>
                <p data-testid="nameValue">{name}</p>
                <input data-testid="inputName" ref={nameRef} type="text" />
                <button
                    data-testid="submitRefButton"
                    type="button"
                    onClick={submitRefButton}
                >
                    Submit
                </button>
            </div>
            <h2 className="number">123456789</h2>
            <h1>Img</h1>
            <Styled />
        </div>
    )
}

export default App
