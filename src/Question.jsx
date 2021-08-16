import React, { useState } from 'react'

const Question = (props) => {
	const { title, info } = props

	// update the UI here
	return <h2>{props.title}</h2>
}

export default Question
