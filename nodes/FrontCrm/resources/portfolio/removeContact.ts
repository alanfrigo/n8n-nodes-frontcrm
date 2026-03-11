import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['removeContact'], resource: ['portfolio'] };

export const portfolioRemoveContactDescription: INodeProperties[] = [
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
		description: 'ID of the contact to remove from the portfolio',
		routing: { send: { type: 'body', property: 'contactId' } },
	},
];
