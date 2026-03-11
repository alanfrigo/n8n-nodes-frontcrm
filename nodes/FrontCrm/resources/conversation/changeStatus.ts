import type { INodeProperties } from 'n8n-workflow';

export const conversationChangeStatusDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['changeStatus'], resource: ['conversation'] } },
		description: 'ID of the conversation to change status for',
	},
	{
		displayName: 'Status',
		name: 'status',
		type: 'options',
		required: true,
		options: [
			{ name: 'Open', value: 'OPEN' },
			{ name: 'Closed', value: 'CLOSED' },
			{ name: 'Waiting', value: 'WAITING' },
		],
		default: 'OPEN',
		displayOptions: { show: { operation: ['changeStatus'], resource: ['conversation'] } },
		routing: { send: { type: 'body', property: 'status' } },
	},
];
