import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['filter'], resource: ['contact'] };

export const contactFilterDescription: INodeProperties[] = [
	{
		displayName: 'Filter (JSON)',
		name: 'filterBody',
		type: 'json',
		default: '{}',
		displayOptions: { show: showFor },
		description: 'Filter criteria as JSON. See FrontCRM API docs for available fields.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
