import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['deleteSubscription'], resource: ['webhook'] };

export const webhookDeleteSubscriptionDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the webhook subscription to delete',
	},
];
