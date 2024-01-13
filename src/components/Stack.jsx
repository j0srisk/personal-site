import { useState } from 'react'
import Card from './Card.jsx'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

export default function Stack() {
	const [index, setIndex] = useState(0)
	const albumCovers = [
		'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png',
		'https://f4.bcbits.com/img/a3716109738_65',
		'https://media.pitchfork.com/photos/5c3379b519f63059050d23b8/1:1/w_320/toro%20y%20moi_outer%20peace.jpg',
		'https://upload.wikimedia.org/wikipedia/en/6/6b/Toro_y_Moi_-_Anything_in_Return.png'
	]

	return (
		<motion.div className="relative h-36 w-36 flex-shrink-0">
			<AnimatePresence initial={false}>
				<Card
					key={index + 1}
					frontCard={false}
					backgroundImage={`url(${albumCovers[(index + 1) % albumCovers.length]})`}
				/>
				<Card
					key={index}
					frontCard={true}
					index={index}
					setIndex={setIndex}
					drag="x"
					backgroundImage={`url(${albumCovers[index % albumCovers.length]})`}
				/>
			</AnimatePresence>
		</motion.div>
	)
}
