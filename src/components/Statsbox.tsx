import TextScramble from '@twistezo/react-text-scramble'
import type { ScrambleTexts } from '@twistezo/react-text-scramble'
import { useState, useEffect } from 'react'

export default function Statsbox() {
	const numbers: string[] = ['7', '4', '∞']
	const texts: string[] = ['Years of Freelancing', 'Projects Completed', 'Cups of Coffee']

	const [numberIndex, setNumberIndex] = useState<number>(0)

	return (
		<div className="flex h-full w-full flex-col items-start justify-end font-semibold text-indigo-900">
			<div className="flex h-full w-full items-center justify-center">
				<p className="text-9xl font-extrabold"></p>
			</div>
			<p className="text-center text-4xl font-bold"></p>
		</div>
	)
}
