import { useState, useEffect } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
	sentences: string[]
	duration?: number
	className?: string
}

export default function FadeText({ sentences, duration, className: additionalClasses }: Props) {
	const [index, setIndex] = useState(0)
	const [text, setText] = useState(sentences[index])
	const [show, setShow] = useState(true)

	useEffect(() => {
		const interval = setInterval(() => {
			setShow(false)
			setTimeout(() => {
				setIndex((prevIndex) => (prevIndex + 1) % sentences.length)
				setText(sentences[(index + 1) % sentences.length])
				setShow(true)
			}, 1000) // Transition Duration
		}, duration || 3000) // Text Visable Duration
		return () => clearInterval(interval)
	}, [index, sentences])

	return (
		<h2
			className={twMerge(
				`transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`,
				additionalClasses
			)}
		>
			{text}
		</h2>
	)
}
