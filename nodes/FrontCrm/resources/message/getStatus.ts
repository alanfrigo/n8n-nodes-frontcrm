import type { INodeProperties } from 'n8n-workflow';

export const messageGetStatusDescription: INodeProperties[] = [
	{
		displayName: 'Message ID',
		name: 'messageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['getStatus'], resource: ['message'] } },
		description: 'ID of the message to get status for',
	},
];
