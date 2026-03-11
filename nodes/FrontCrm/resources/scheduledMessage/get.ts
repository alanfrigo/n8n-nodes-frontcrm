import type { INodeProperties } from 'n8n-workflow';

export const scheduledMessageGetDescription: INodeProperties[] = [
	{
		displayName: 'Scheduled Message ID',
		name: 'scheduledMessageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['get'], resource: ['scheduledMessage'] } },
		description: 'ID of the scheduled message to retrieve',
	},
];
