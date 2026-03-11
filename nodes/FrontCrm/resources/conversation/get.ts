import type { INodeProperties } from 'n8n-workflow';

export const conversationGetDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['get'], resource: ['conversation'] } },
		description: 'ID of the conversation to retrieve',
	},
];
