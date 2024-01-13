import { useState } from 'react'
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion'

export default function Card(props) {
	const [exitX, setExitX] = useState(0)

	const x = useMotionValue(0)
	const scale = useTransform(x, [-150, 0, 150], [0.5, 1, 0.5])
	const rotate = useTransform(x, [-150, 0, 150], [-45, 0, 45], {
		clamp: false
	})

	const variantsFrontCard = {
		animate: { scale: 1, y: 0, opacity: 1, rotate: 6 },
		exit: (custom) => ({
			x: custom,
			opacity: 0,
			scale: 0.5,
			transition: { duration: 0.2 }
		})
	}
	const variantsBackCard = {
		initial: { scale: 0, y: 105, opacity: 0 },
		animate: { scale: 1, y: 0, opacity: 0.5, rotate: 0 }
	}

	function handleDragEnd(_, info) {
		if (info.offset.x < -100) {
			setExitX(-250)
			props.setIndex(props.index + 1)
		}
		if (info.offset.x > 100) {
			setExitX(250)
			props.setIndex(props.index + 1)
		}
	}

	return (
		<motion.div
			style={{
				x,
				rotate
			}}
			className="absolute left-0 top-0 flex h-full w-full cursor-grab items-center justify-center"
			whileTap={{ cursor: 'grabbing' }}
			// Dragging
			drag={props.drag}
			dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
			onDragEnd={handleDragEnd}
			// Animation
			variants={props.frontCard ? variantsFrontCard : variantsBackCard}
			initial="initial"
			animate="animate"
			exit="exit"
			custom={exitX}
			transition={
				props.frontCard
					? { type: 'spring', stiffness: 300, damping: 20 }
					: { scale: { duration: 0.2 }, opacity: { duration: 0.4 } }
			}
		>
			<motion.div
				style={{
					backgroundImage: props.backgroundImage,
					backgroundSize: 'cover',

					scale
				}}
				className="h-full w-full rounded shadow-lg"
			/>
		</motion.div>
	)
}
