import React, { useState } from 'react'
import data from './data'
import SingleQuestion from './Question'

function App() {
	return (
		<main>
			<div className="container">
				<h3>FAQ</h3>
				<section className="info">
					{/* map over data imported at the top and use SingleQuestion component */}
				</section>
			</div>
		</main>
	)
}

export default App
