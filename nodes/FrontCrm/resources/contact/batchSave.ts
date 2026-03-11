import type { INodeProperties } from 'n8n-workflow';

export const contactBatchSaveDescription: INodeProperties[] = [
	{
		displayName: 'Contacts (JSON)',
		name: 'contacts',
		type: 'json',
		default: '[]',
		displayOptions: { show: { operation: ['batchSave'], resource: ['contact'] } },
		description: 'Array of contact objects to create or update',
		routing: { send: { type: 'body', property: '/' } },
	},
];
