import { Fragment } from 'react'

type MediaCardProps = {
	className?: string
	heading?: string
	title: string
	detailsArray?: string[]
	imageUrl?: string
	durationText?: string
	progress?: number
	iconUrl?: string | null
	href?: string
	children?: React.ReactNode
}

export default function MediaCard({
	className,
	heading,
	title,
	detailsArray,
	imageUrl,
	durationText,
	progress,
	iconUrl,
	href,
	children
}: MediaCardProps) {
	return (
		<div className={`flex flex-shrink-0 snap-start scroll-ml-4 flex-col gap-1 ${className}`}>
			<div className="relative flex aspect-video flex-shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-tr from-zinc-800 to-zinc-900 text-white">
				{progress || durationText || iconUrl ? (
					<div className="absolute inset-0 z-20 flex h-full w-full items-end bg-gradient-to-t from-black/50 p-2">
						<div className="flex h-8 w-full gap-4">
							<div className="flex h-full w-full flex-col justify-between">
								<p className="text-body-emphasized w-full truncate text-left uppercase text-white">
									{durationText}
								</p>
								{progress && (
									<div className="bg-label-tetiary-dark flex h-1 w-full rounded-full">
										<div
											style={{ width: `${progress}%` }}
											className="bg-system-orange-light dark:bg-system-orange-dark h-full rounded-full"
										></div>
									</div>
								)}
							</div>
							{iconUrl && (
								<img
									src={iconUrl}
									alt="icon"
									width={100}
									height={100}
									className="h-8 w-8 rounded-[10px]"
								/>
							)}
						</div>
					</div>
				) : null}
				{imageUrl ? (
					<>
						<img
							src={imageUrl}
							alt={title}
							width={1000}
							height={1000}
							className="absolute top-0 h-full w-full object-cover object-center"
						/>
					</>
				) : (
					<>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="h-8 w-8 stroke-white"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
							/>
						</svg>
					</>
				)}
			</div>
			{title && (
				<div className="flex h-full w-full flex-col items-start justify-start">
					<p className="text-footnote-emphasized w-full truncate text-left uppercase text-white dark:text-white">
						{heading}
					</p>
					<p className="text-body w-full truncate text-left">{title}</p>
					<p className="text-subheadline w-full truncate text-left text-white dark:text-white">
						{detailsArray?.map((value, index) => (
							<Fragment key={index}>
								{value}
								{detailsArray[index + 1] !== '' && index !== detailsArray.length - 1 && ' • '}
							</Fragment>
						))}
					</p>
					{children}
				</div>
			)}
		</div>
	)
}
