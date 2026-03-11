import type { INodeProperties } from 'n8n-workflow';

export const scheduledMessageCancelDescription: INodeProperties[] = [
	{
		displayName: 'Scheduled Message ID',
		name: 'scheduledMessageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['cancel'], resource: ['scheduledMessage'] } },
		description: 'ID of the scheduled message to cancel',
	},
];
