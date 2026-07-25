import { ImageResponse } from 'next/og';

export const alt = 'From Monolith to Microservices · APIConf Lagos 2026';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

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
							color: '#818cf8',
							fontSize: '14px',
							fontFamily: 'monospace',
						}}
					>
						$ devfresher_me
					</span>
				</div>

				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						paddingTop: '80px',
						paddingLeft: '60px',
						paddingRight: '60px',
					}}
				>
					<p
						style={{
							fontSize: '22px',
							color: '#818cf8',
							margin: '0 0 24px 0',
							fontFamily: 'monospace',
						}}
					>
						// APIConf Lagos 2026
					</p>
					<h1
						style={{
							fontSize: '56px',
							fontWeight: '700',
							color: '#171717',
							margin: '0 0 20px 0',
							textAlign: 'center',
							lineHeight: '1.15',
							maxWidth: '1000px',
						}}
					>
						From Monolith to Microservices
					</h1>
					<p
						style={{
							fontSize: '24px',
							color: '#525252',
							margin: '0',
							textAlign: 'center',
							maxWidth: '900px',
							lineHeight: '1.4',
						}}
					>
						Building APIs That Survive Production
					</p>
				</div>

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
						fontSize: '14px',
						fontFamily: 'monospace',
					}}
				>
					<span style={{ color: '#27c93f' }}>$</span>
					<span style={{ marginLeft: '10px', color: '#ededed' }}>
						devfresher.me/apiconf
					</span>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
