import type { INodeProperties } from 'n8n-workflow';
import { tagGetAllDescription } from './getAll';

const showOnlyForTag = { resource: ['tag'] };

export const tagDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForTag },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many tags',
				description: 'Retrieve many tags',
				routing: { request: { method: 'GET', url: '/v1/tag' } },
			},
		],
		default: 'getAll',
	},
	...tagGetAllDescription,
];
