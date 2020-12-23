import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props
	// add a state variable here
	const [visible, setVisible] = useState(false)

	return (
		<article className="question">
			<header>
				<h4>{title}</h4>
				{/* make this toggle functionality onClick */}
				<button className="btn" onClick={() => setVisible((state) => !state)}>
					{visible ? '-' : '+'}
				</button>
			</header>
			{/* make this render conditionally */}
			{visible && <p>{info}</p>}
		</article>
	)
}

export default Question
