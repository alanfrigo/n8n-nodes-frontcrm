import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['removeContact'], resource: ['portfolio'] };

export const portfolioRemoveContactDescription: INodeProperties[] = [
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
		description: 'ID of the contact to remove from the portfolio',
		routing: { send: { type: 'body', property: 'contactId' } },
	},
];
