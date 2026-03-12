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
		displayName: 'User Name or ID',
		name: 'userId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getUsers' },
		required: true,
		default: '',
		displayOptions: { show: { operation: ['assignUser'], resource: ['conversation'] } },
		description: 'ID of the user to assign. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		routing: { send: { type: 'body', property: 'userId' } },
	},
];
