import type { INodeProperties } from 'n8n-workflow';

export const portfolioBatchAddContactsDescription: INodeProperties[] = [
	{
		displayName: 'Portfolio ID',
		name: 'portfolioId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['batchAddContacts'], resource: ['portfolio'] } },
		description: 'ID of the portfolio',
	},
	{
		displayName: 'Filter Body (JSON)',
		name: 'filterBody',
		type: 'json',
		default: '{}',
		displayOptions: { show: { operation: ['batchAddContacts'], resource: ['portfolio'] } },
		description: 'Filter criteria to select contacts to add. See API docs.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
