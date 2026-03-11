import type { INodeProperties } from 'n8n-workflow';

export const conversationAssignUserDescription: INodeProperties[] = [
	{
		displayName: 'Session ID',
		name: 'sessionId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['assignUser'], resource: ['conversation'] } },
		description: 'ID of the conversation to assign a user to',
	},
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['assignUser'], resource: ['conversation'] } },
		description: 'ID of the user to assign',
		routing: { send: { type: 'body', property: 'userId' } },
	},
];
