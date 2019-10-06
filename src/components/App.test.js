import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {
    render, fireEvent, getByTestId
} from '@testing-library/react'

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});


it('App load 初始化為0', () => {
    const { container } = render(<App />)
    const countValue = getByTestId(container, 'countvalue')
    expect(countValue.textContent).toBe("0");
})

it("按鈕 增加跟減少 行為有運作", () => {
    const { container } = render(<App />)

    const countValue = getByTestId(container, "countvalue")
    const increment = getByTestId(container, "incrementButton")
    const decrement = getByTestId(container, "decrementButton")

    expect(countValue.textContent).toBe('0')
    fireEvent.click(increment)
    expect(countValue.textContent).toBe('1')
    fireEvent.click(decrement)
    expect(countValue.textContent).toBe('0')

})

it("送出 更新 input field 更動值", () => {
    const { container, rerender } = render(<App />)

    const nameValue = getByTestId(container, "nameValue")
    const inputName = getByTestId(container, 'inputName')

    const submitButton = getByTestId(container, 'submitRefButton')
    const newName = 'Ben'

    fireEvent.change(inputName, { target: { value: newName } })
    fireEvent.click(submitButton)

    expect(nameValue.textContent).toEqual(newName)

    rerender(<App />)

    expect(window.localStorage.getItem('name')).toBe(newName)
})