export type TestimonialRelationship =
	| 'colleague'
	| 'manager'
	| 'employer'
	| 'client'
	| 'community';

export interface Testimonial {
	id: string;
	quote: string;
	name: string;
	/** e.g. Engineering Manager, CTO, Product Lead */
	title: string;
	company: string;
	relationship: TestimonialRelationship;
	/** Whether they worked together at the company currently or in the past */
	context?: 'current' | 'past';
	/** Show on the home page (keep to 2-3) */
	featured?: boolean;
	linkedIn?: string;
	/** Public post or profile where the feedback appeared */
	sourceUrl?: string;
}

export const relationshipLabels: Record<TestimonialRelationship, string> = {
	colleague: 'Colleague',
	manager: 'Manager',
	employer: 'Employer',
	client: 'Client',
	community: 'Reader',
};

/** Public feedback from colleagues and LinkedIn post comments on writing. */
export const testimonials: Testimonial[] = [
	{
		id: 'fortune-atuokwu-snapnet-2025',
		quote:
			'Thank you for your support. Capacity dey shout omo! I\'m looking up to you boss. Thank you for all you do.',
		name: 'Fortune Atuokwu',
		title: 'Software Engineer',
		company: 'Snapnet Limited',
		relationship: 'colleague',
		context: 'past',
		featured: true,
		linkedIn: 'https://linkedin.com/in/fortune-atuokwu-427213186',
		sourceUrl:
			'https://www.linkedin.com/posts/fortune-atuokwu-427213186_congratulations-to-everyone-that-made-it-activity-7412082891188490240-VHUQ',
	},
	{
		id: 'chidinma-nwatu-idempotency-2025',
		quote:
			'I love reading your articles. You\'ve a way of explaining concept. Thank you for sharing.',
		name: 'Chidinma Nwatu',
		title: 'Backend Engineer',
		company: 'Independent',
		relationship: 'community',
		featured: true,
		linkedIn: 'https://linkedin.com/in/chidinma-nwatu',
		sourceUrl:
			'https://www.linkedin.com/posts/devfresher_again-system-design-is-not-something-to-activity-7377597909103624192-qxAd',
	},
	{
		id: 'chimezie-obinwa-notification-system-2025',
		quote: 'Absolutely love this, thanks for sharing',
		name: 'Chimezie Obinwa',
		title: 'Software Engineer',
		company: 'Independent',
		relationship: 'community',
		linkedIn: 'https://linkedin.com/in/collinsmezie',
		sourceUrl:
			'https://www.linkedin.com/posts/devfresher_system-design-is-one-of-those-things-every-activity-7377220438835408896-ejB_',
	},
	{
		id: 'hari-nair-api-gateway-2025',
		quote:
			'Highlighting the potential pitfalls of an improperly set up API Gateway is crucial. It\'s more than just a proxy; it centralizes and streamlines microservice orchestration, enhancing security and efficiency. A must for scaling apps!',
		name: 'Hari Nair',
		title: 'Solution & Enterprise Architect',
		company: 'Independent',
		relationship: 'community',
		featured: true,
		linkedIn: 'https://linkedin.com/in/haridasnair',
		sourceUrl:
			'https://www.linkedin.com/posts/devfresher_thebukaseries-apigateway-activity-7330110080513630209-lUhK',
	},
];

export function getFeaturedTestimonials(limit = 3) {
	return testimonials.filter((t) => t.featured).slice(0, limit);
}

export function getTestimonialsByContext(context?: 'current' | 'past') {
	if (!context) return testimonials;
	return testimonials.filter((t) => t.context === context);
}

export function getCommunityTestimonials() {
	return testimonials.filter((t) => t.relationship === 'community');
}

export function getWorkplaceTestimonials() {
	return testimonials.filter((t) => t.relationship !== 'community');
}
