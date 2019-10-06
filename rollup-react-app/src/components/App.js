import React, { useState } from 'react'
import './App.scss'
const App = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className="background">
			<h1>Hello React App</h1>
			<p>you can try every thing</p>
			<button onClick={() => setOpen(!open)}>try to click</button>
			{open ? <p>hook opend</p> : <p>hook closed</p>}
		</div>
	)
}

export default App
