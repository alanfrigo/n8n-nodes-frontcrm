import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['sendSessionMessage'], resource: ['message'] };

export const messageSendSessionMessageDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the session to send the message in',
	},
	{
		displayName: 'Message Body (JSON)',
		name: 'messageBody',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: { show: showFor },
		description: 'Message data as JSON. See API docs for schema.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
