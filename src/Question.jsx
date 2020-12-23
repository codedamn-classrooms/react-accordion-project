import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn">+</button>
			</header>
			{/* make this render conditionally */}
			<p>{info}</p>
		</article>
	)
}

export default Question
