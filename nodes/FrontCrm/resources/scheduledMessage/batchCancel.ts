import type { INodeProperties } from 'n8n-workflow';

export const scheduledMessageBatchCancelDescription: INodeProperties[] = [
	{
		displayName: 'IDs',
		name: 'ids',
		type: 'string',
		typeOptions: { multipleValues: true },
		required: true,
		default: [],
		displayOptions: { show: { operation: ['batchCancel'], resource: ['scheduledMessage'] } },
		description: 'IDs of scheduled messages to cancel',
		routing: { send: { type: 'body', property: 'ids' } },
	},
];
