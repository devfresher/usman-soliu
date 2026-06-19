import { ImageResponse } from 'next/og';
import { principles, siteConfig } from '@/lib/data/site';

export const alt = `${siteConfig.name} — ${siteConfig.title}`;
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
					<h1
						style={{
							fontSize: '72px',
							fontWeight: '700',
							color: '#171717',
							margin: '0 0 20px 0',
							textAlign: 'center',
						}}
					>
						{siteConfig.name}
					</h1>
					<p
						style={{
							fontSize: '26px',
							color: '#525252',
							margin: '0 0 32px 0',
							textAlign: 'center',
							maxWidth: '900px',
							lineHeight: '1.35',
						}}
					>
						{siteConfig.title}
					</p>
					<p
						style={{
							fontSize: '24px',
							color: '#171717',
							margin: '0 0 30px 0',
							textAlign: 'center',
							maxWidth: '900px',
							lineHeight: '1.4',
							fontWeight: '400',
						}}
					>
						{siteConfig.description}
					</p>
					<div
						style={{
							display: 'flex',
							gap: '16px',
							flexWrap: 'wrap',
							justifyContent: 'center',
							maxWidth: '1000px',
						}}
					>
						{principles.map((principle) => (
							<div
								key={principle.title}
								style={{
									padding: '10px 20px',
									backgroundColor: '#ffffff',
									color: '#171717',
									border: '1px solid rgba(0,0,0,0.08)',
									borderRadius: '8px',
									fontSize: '18px',
									fontWeight: '500',
								}}
							>
								{principle.title}
							</div>
						))}
					</div>
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
						devfresher.me
					</span>
				</div>
			</div>
		),
		{
			...size,
		}
	);
}
