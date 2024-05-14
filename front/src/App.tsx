import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Mainpage from './components/mainpage'

function App() {
	return (
		<div>
			<Routes>
        <Route path="/" element={<Mainpage />} />
      </Routes>
		</div>
	)
}

export default App
