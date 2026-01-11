import { ImageResponse } from '@vercel/og';

export const alt = 'Usman Soliu - Tech Lead & Product Engineer';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

// Force runtime to be edge for better compatibility
export const runtime = 'edge';

export default async function Image() {
	return new ImageResponse(
		(
			<div
				style={{
					height: '100%',
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#fafafa',
					backgroundImage: 'linear-gradient(135deg, #fafafa 0%, #e5e5e5 100%)',
					fontFamily: 'system-ui, -apple-system, sans-serif',
				}}
			>
				{/* Terminal-style header */}
				<div
					style={{
						display: 'flex',
						position: 'absolute',
						top: 0,
						left: 0,
						right: 0,
						height: '60px',
						backgroundColor: '#1a1a1a',
						alignItems: 'center',
						paddingLeft: '20px',
						gap: '10px',
					}}
				>
					<div
						style={{
							width: '12px',
							height: '12px',
							borderRadius: '50%',
							backgroundColor: '#ff5f56',
						}}
					/>
					<div
						style={{
							width: '12px',
							height: '12px',
							borderRadius: '50%',
							backgroundColor: '#ffbd2e',
						}}
					/>
					<div
						style={{
							width: '12px',
							height: '12px',
							borderRadius: '50%',
							backgroundColor: '#27c93f',
						}}
					/>
					<span
						style={{
							marginLeft: '20px',
							color: '#60a5fa',
							fontSize: '14px',
							fontFamily: 'monospace',
						}}
					>
						$ devfresher_me
					</span>
				</div>

				{/* Main content */}
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: '80px',
					}}
				>
					<h1
						style={{
							fontSize: '72px',
							fontWeight: '700',
							color: '#1a1a1a',
							margin: '0 0 20px 0',
							textAlign: 'center',
						}}
					>
						Usman Soliu
					</h1>
					<p
						style={{
							fontSize: '32px',
							color: '#4a4a4a',
							margin: '0 0 40px 0',
							textAlign: 'center',
						}}
					>
						Tech Lead & Product Engineer
					</p>
					<div
						style={{
							display: 'flex',
							gap: '12px',
							flexWrap: 'wrap',
							justifyContent: 'center',
							maxWidth: '900px',
						}}
					>
						{['Node.js', 'TypeScript', 'NestJS', 'Golang', 'AWS', 'Docker'].map(
							(tech) => (
								<div
									key={tech}
									style={{
										padding: '8px 16px',
										backgroundColor: '#1a1a1a',
										color: '#fafafa',
										borderRadius: '6px',
										fontSize: '18px',
										fontWeight: '500',
									}}
								>
									{tech}
								</div>
							)
						)}
					</div>
				</div>

				{/* Terminal footer */}
				<div
					style={{
						display: 'flex',
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						height: '50px',
						backgroundColor: '#1a1a1a',
						alignItems: 'center',
						paddingLeft: '20px',
						color: '#27c93f',
						fontSize: '14px',
						fontFamily: 'monospace',
					}}
				>
					<span style={{ color: '#27c93f' }}>$</span>
					<span style={{ marginLeft: '10px', color: '#fafafa' }}>
						Building scalable, impact-driven systems
					</span>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
