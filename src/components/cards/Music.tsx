import { useState } from 'react'
import RecordStack from '../RecordStack'
import { twMerge } from 'tailwind-merge'

import type { Album } from '../../types'

export default function Music() {
	const Albums: Album[] = [
		{
			name: 'Currents',
			artist: 'Tame Impala',
			coverURL: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Tame_Impala_-_Currents.png',
			className: 'bg-violet-200 border-violet-500 dark:border-violet-500 text-white'
		},
		{
			name: 'The Slow Rush',
			artist: 'Tame Impala',
			coverURL: 'https://upload.wikimedia.org/wikipedia/en/5/54/Tame_Impala_-_The_Slow_Rush.png',
			className: 'bg-red-200 border-red-500'
		},
		{
			name: 'Outer Peace',
			artist: 'Toro y Moi',
			coverURL: 'https://upload.wikimedia.org/wikipedia/en/7/75/Toro_y_Moi_-_Outer_Peace.png',
			className: 'bg-yellow-200 border-yellow-500 text-black'
		},
		{
			name: 'A Moon Shaped Pool',
			artist: 'Radiohead',
			coverURL: 'https://upload.wikimedia.org/wikipedia/en/6/6a/Amoonshapedpool.png'
		}
	]

	const [index, setIndex] = useState(0)

	return (
		<div
			className={twMerge(
				`border-1 relative w-full flex-shrink-0 overflow-hidden rounded-2xl border border-neutral-300 p-4 text-black shadow transition-all duration-1000 ease-in-out dark:border-zinc-800`,
				Albums[index].className
			)}
		>
			<div className="group flex h-full items-center gap-8">
				<div className="relative flex h-full w-full flex-grow-0 flex-col items-start justify-center truncate">
					<div className="flex items-center gap-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 16 16"
							fill="currentColor"
							className="z-10 h-3 w-3"
						>
							<path d="M14 1.75a.75.75 0 0 0-.89-.737l-7.502 1.43a.75.75 0 0 0-.61.736v2.5c0 .018 0 .036.002.054V9.73a1 1 0 0 1-.813.983l-.58.11a1.978 1.978 0 0 0 .741 3.886l.603-.115c.9-.171 1.55-.957 1.55-1.873v-1.543l-.001-.043V6.3l6-1.143v3.146a1 1 0 0 1-.813.982l-.584.111a1.978 1.978 0 0 0 .74 3.886l.326-.062A2.252 2.252 0 0 0 14 11.007V1.75Z"></path>
						</svg>
						<p className="z-10 text-xs">Current Coding Jams</p>
					</div>
					<h3 className="z-10 w-full truncate text-wrap text-2xl font-bold">
						{Albums[index].name}
					</h3>
					<p className="z-10 text-sm">{Albums[index].artist}</p>
					<p className="z-20 hidden text-sm">{index}</p>
				</div>

				<RecordStack index={index} setIndex={setIndex} albums={Albums} />
			</div>
		</div>
	)
}
