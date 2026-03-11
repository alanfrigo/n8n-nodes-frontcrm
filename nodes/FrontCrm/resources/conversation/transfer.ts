import type { INodeProperties } from 'n8n-workflow';

export const conversationTransferDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['transfer'], resource: ['conversation'] } },
		description: 'ID of the conversation to transfer',
	},
	{
		displayName: 'Transfer Data (JSON)',
		name: 'transferData',
		type: 'json',
		default: '{}',
		displayOptions: { show: { operation: ['transfer'], resource: ['conversation'] } },
		description: 'Transfer data (departmentId, userId, etc). See API docs.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
