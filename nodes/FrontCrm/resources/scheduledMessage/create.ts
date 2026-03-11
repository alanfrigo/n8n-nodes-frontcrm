import type { INodeProperties } from 'n8n-workflow';

export const scheduledMessageCreateDescription: INodeProperties[] = [
	{
		displayName: 'Message Data (JSON)',
		name: 'messageData',
		type: 'json',
		required: true,
		default: '{}',
		displayOptions: { show: { operation: ['create'], resource: ['scheduledMessage'] } },
		description:
			'Scheduled message data as JSON. See API docs for schema (channelId, to, type, content, scheduledAt, etc.).',
		routing: { send: { type: 'body', property: '/' } },
	},
];
