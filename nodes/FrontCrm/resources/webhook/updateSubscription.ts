import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['updateSubscription'], resource: ['webhook'] };

export const webhookUpdateSubscriptionDescription: INodeProperties[] = [
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the webhook subscription to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'URL',
				name: 'url',
				type: 'string',
				default: '',
				description: 'Webhook URL to receive events',
				routing: { send: { type: 'body', property: 'url' } },
			},
			{
				displayName: 'Events',
				name: 'events',
				type: 'string',
				typeOptions: { multipleValues: true },
				default: [],
				description: 'Event types to subscribe to',
				routing: { send: { type: 'body', property: 'events' } },
			},
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Subscription name/description',
				routing: { send: { type: 'body', property: 'name' } },
			},
		],
	},
];
