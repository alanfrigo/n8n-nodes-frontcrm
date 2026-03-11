import type { INodeProperties } from 'n8n-workflow';

export const conversationCompleteDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['complete'], resource: ['conversation'] } },
		description: 'ID of the conversation to complete',
	},
];
