import Record from './Record.jsx'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

import type { Album } from '../types.ts'

type Props = {
	index: number
	setIndex: (index: number) => void
	albums: Array<Album>
}

export default function RecordStack({ index, setIndex, albums }: Props) {
	return (
		<motion.div className="relative h-36 w-36 flex-shrink-0">
			<AnimatePresence initial={false}>
				<Record
					key={index + 2}
					order={3}
					backgroundImage={`url(${albums[(index + 2) % albums.length].coverURL})`}
				/>
				<Record
					key={index + 1}
					order={2}
					backgroundImage={`url(${albums[(index + 1) % albums.length].coverURL})`}
				/>
				<Record
					key={index}
					index={index}
					order={1}
					setIndex={setIndex}
					drag="x"
					albums={albums}
					backgroundImage={`url(${albums[index % albums.length].coverURL})`}
				/>
			</AnimatePresence>
		</motion.div>
	)
}
