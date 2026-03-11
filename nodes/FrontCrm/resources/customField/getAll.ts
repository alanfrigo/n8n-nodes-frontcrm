import type { INodeProperties } from 'n8n-workflow';

export const customFieldGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { operation: ['getAll'], resource: ['customField'] } },
		options: [
			{
				displayName: 'Entity Type',
				name: 'entityType',
				type: 'options',
				options: [
					{ name: 'Contact', value: 'CONTACT' },
					{ name: 'Panel', value: 'PANEL' },
				],
				default: 'CONTACT',
				routing: { send: { type: 'query', property: 'EntityType' } },
			},
			{
				displayName: 'Include Nested List',
				name: 'nestedList',
				type: 'boolean',
				default: false,
				routing: { send: { type: 'query', property: 'NestedList' } },
			},
		],
	},
];
