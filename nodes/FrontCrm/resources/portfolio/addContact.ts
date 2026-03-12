import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['addContact'], resource: ['portfolio'] };

export const portfolioAddContactDescription: INodeProperties[] = [
	{
		displayName: 'Portfolio Name or ID',
		name: 'portfolioId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getPortfolios' },
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the portfolio. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the contact to add to the portfolio',
		routing: { send: { type: 'body', property: 'contactId' } },
	},
];
