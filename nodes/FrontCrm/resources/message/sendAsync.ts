import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['sendAsync'], resource: ['message'] };

export const messageSendAsyncDescription: INodeProperties[] = [
	{
		displayName: 'Channel Name or ID',
		name: 'channelId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getChannels' },
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Channel ID to send from. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		routing: { send: { type: 'body', property: 'channelId' } },
	},
	{
		displayName: 'To',
		name: 'to',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Recipient phone number',
		routing: { send: { type: 'body', property: 'to' } },
	},
	{
		displayName: 'Message Type',
		name: 'messageType',
		type: 'options',
		required: true,
		default: 'TEXT',
		displayOptions: { show: showFor },
		options: [
			{ name: 'AUDIO', value: 'AUDIO' },
			{ name: 'DOCUMENT', value: 'DOCUMENT' },
			{ name: 'IMAGE', value: 'IMAGE' },
			{ name: 'TEMPLATE', value: 'TEMPLATE' },
			{ name: 'TEXT', value: 'TEXT' },
			{ name: 'VIDEO', value: 'VIDEO' },
		],
		routing: { send: { type: 'body', property: 'type' } },
	},
	{
		displayName: 'Text',
		name: 'text',
		type: 'string',
		required: true,
		default: '',
		typeOptions: { rows: 4 },
		displayOptions: { show: { ...showFor, messageType: ['TEXT'] } },
		routing: { send: { type: 'body', property: 'text' } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Media URL',
				name: 'mediaUrl',
				type: 'string',
				default: '',
				description: 'URL of media to send (for IMAGE, VIDEO, AUDIO, DOCUMENT)',
				routing: { send: { type: 'body', property: 'mediaUrl' } },
			},
		],
	},
];
