import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['update'], resource: ['scheduledMessage'] };

export const scheduledMessageUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Scheduled Message ID',
		name: 'scheduledMessageId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the scheduled message to update',
	},
	{
		displayName: 'Update Data (JSON)',
		name: 'updateData',
		type: 'json',
		default: '{}',
		displayOptions: { show: showFor },
		description: 'Update data as JSON. See API docs.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
