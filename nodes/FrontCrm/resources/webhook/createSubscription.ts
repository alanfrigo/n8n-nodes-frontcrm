import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['createSubscription'], resource: ['webhook'] };

export const webhookCreateSubscriptionDescription: INodeProperties[] = [
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Webhook URL to receive events',
		routing: { send: { type: 'body', property: 'url' } },
	},
	{
		displayName: 'Optional Fields',
		name: 'optionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
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
