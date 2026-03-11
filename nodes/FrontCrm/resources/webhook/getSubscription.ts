import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['getSubscription'], resource: ['webhook'] };

export const webhookGetSubscriptionDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the webhook subscription',
	},
];
