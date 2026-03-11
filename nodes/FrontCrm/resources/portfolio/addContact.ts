import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['addContact'], resource: ['portfolio'] };

export const portfolioAddContactDescription: INodeProperties[] = [
	{
		displayName: 'Portfolio ID',
		name: 'portfolioId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the portfolio',
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
