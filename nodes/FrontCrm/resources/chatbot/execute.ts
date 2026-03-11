import type { INodeProperties } from 'n8n-workflow';

export const chatbotExecuteDescription: INodeProperties[] = [
	{
		displayName: 'Chatbot Body (JSON)',
		name: 'chatbotBody',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: { show: { operation: ['execute'], resource: ['chatbot'] } },
		description: 'Chatbot execution parameters. See API docs for schema.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
