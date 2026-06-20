/** General toolkit — aligned with stacks used across production case studies. */
export const techStackIntro =
	'Tools from systems I have shipped or led — HR SaaS, fintech, food delivery, EdTech, and charity platforms. I pick what fits the problem, not what is trending.';

export const techStackCategories = [
	{
		label: 'Languages & Runtimes',
		items: ['Node.js', 'TypeScript', 'Golang', 'PHP'],
	},
	{
		label: 'Frameworks & ORM',
		items: ['NestJS', 'Express.js', 'Next.js', 'Prisma', 'Mongoose', 'Sequelize', 'TypeORM'],
	},
	{
		label: 'Data & cache',
		items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
	},
	{
		label: 'Messaging & real-time',
		items: ['RabbitMQ', 'BullMQ', 'gRPC', 'Socket.IO'],
	},
	{
		label: 'Infrastructure & ops',
		items: ['Docker', 'AWS', 'DigitalOcean', 'Azure Blob', 'Sentry', 'CI/CD', 'PM2'],
	},
	{
		label: 'Integrations',
		items: ['Paystack', 'Firebase', 'Cloudinary', 'SumSub', 'OpenAI', 'Supabase'],
	},
] as const;
