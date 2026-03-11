import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['getAll'], resource: ['card'] };

export const cardGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Panel ID',
		name: 'panelId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the panel/pipeline to list cards from',
		routing: { send: { type: 'query', property: 'PanelId' } },
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: { show: showFor },
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		routing: {
			send: { paginate: '={{ $value }}', type: 'query', property: 'PageSize', value: '100' },
			operations: {
				pagination: {
					type: 'generic',
					properties: {
						continue:
							'={{ $response.body?.data?.length > 0 && $response.body?.data?.length >= ($request.qs?.PageSize ?? 20) }}',
						request: { qs: { PageNumber: '={{ ($request.qs?.PageNumber ?? 1) + 1 }}' } },
					},
				},
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		typeOptions: { minValue: 1, maxValue: 100 },
		default: 50,
		displayOptions: { show: { ...showFor, returnAll: [false] } },
		description: 'Max number of results to return',
		routing: { send: { type: 'query', property: 'PageSize' }, output: { maxResults: '={{$value}}' } },
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Contact ID',
				name: 'contactId',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'ContactId' } },
			},
			{
				displayName: 'Include Archived',
				name: 'includeArchived',
				type: 'boolean',
				default: false,
				routing: { send: { type: 'query', property: 'IncludeArchived' } },
			},
			{
				displayName: 'Responsible User ID',
				name: 'responsibleUserId',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'ResponsibleUserId' } },
			},
			{
				displayName: 'Step ID',
				name: 'stepId',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'StepId' } },
			},
			{
				displayName: 'Text Filter',
				name: 'textFilter',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'TextFilter' } },
			},
		],
	},
];
