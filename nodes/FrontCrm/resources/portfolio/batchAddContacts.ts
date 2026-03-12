import type { INodeProperties } from 'n8n-workflow';

export const portfolioBatchAddContactsDescription: INodeProperties[] = [
	{
		displayName: 'Portfolio Name or ID',
		name: 'portfolioId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getPortfolios' },
		required: true,
		default: '',
		displayOptions: { show: { operation: ['batchAddContacts'], resource: ['portfolio'] } },
		description: 'ID of the portfolio. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
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
