import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	// Explicitly set the output file tracing root to prevent workspace detection issues
	// This tells Next.js to use the current directory as the root, not the parent
	outputFileTracingRoot: process.cwd(),
};

export default nextConfig;
