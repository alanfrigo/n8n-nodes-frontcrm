import type { INodeProperties } from 'n8n-workflow';

export const messageDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['delete'], resource: ['message'] } },
		description: 'ID of the message to delete',
	},
];
