import type { INodeProperties } from 'n8n-workflow';

export const contactGetByIdDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['getById'], resource: ['contact'] } },
		description: 'ID of the contact',
	},
];
