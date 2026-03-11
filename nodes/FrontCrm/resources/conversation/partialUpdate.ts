import type { INodeProperties } from 'n8n-workflow';

export const conversationPartialUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['partialUpdate'], resource: ['conversation'] } },
		description: 'ID of the conversation to partially update',
	},
	{
		displayName: 'Update Data (JSON)',
		name: 'updateData',
		type: 'json',
		default: '{}',
		displayOptions: { show: { operation: ['partialUpdate'], resource: ['conversation'] } },
		description: 'Partial update data as JSON. See API docs.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
