import type { INodeProperties } from 'n8n-workflow';

export const messageGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['getById'], resource: ['message'] } },
		description: 'ID of the message to retrieve',
	},
];
