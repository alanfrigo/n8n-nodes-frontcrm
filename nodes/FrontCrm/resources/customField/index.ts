import type { INodeProperties } from 'n8n-workflow';
import { customFieldGetAllDescription } from './getAll';

const showOnlyForCustomField = { resource: ['customField'] };

export const customFieldDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForCustomField },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many custom fields',
				description: 'Retrieve many custom fields',
				routing: { request: { method: 'GET', url: '/v1/custom-field' } },
			},
		],
		default: 'getAll',
	},
	...customFieldGetAllDescription,
];
