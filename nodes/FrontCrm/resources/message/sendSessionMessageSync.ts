import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['sendSessionMessageSync'], resource: ['message'] };

export const messageSendSessionMessageSyncDescription: INodeProperties[] = [
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
		description: 'Message data as JSON (sync). See API docs.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
