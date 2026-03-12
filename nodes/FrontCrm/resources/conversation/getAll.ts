import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['getAll'], resource: ['conversation'] };

export const conversationGetAllDescription: INodeProperties[] = [
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
				displayName: 'Channel Name or ID',
				name: 'channelId',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: { loadOptionsMethod: 'getChannels' },
				default: '',
				routing: { send: { type: 'query', property: 'ChannelsId' } },
			},
			{
				displayName: 'Contact ID',
				name: 'contactId',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'ContactId' } },
			},
			{
				displayName: 'Department Name or ID',
				name: 'departmentId',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: { loadOptionsMethod: 'getDepartments' },
				default: '',
				routing: { send: { type: 'query', property: 'DepartmentId' } },
			},
			{
				displayName: 'Status',
				name: 'status',
				type: 'options',
				options: [
					{ name: 'All', value: '' },
					{ name: 'Closed', value: 'CLOSED' },
					{ name: 'Open', value: 'OPEN' },
					{ name: 'Waiting', value: 'WAITING' },
				],
				default: '',
				routing: { send: { type: 'query', property: 'Status' } },
			},
			{
				displayName: 'User Name or ID',
				name: 'userId',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: { loadOptionsMethod: 'getUsers' },
				default: '',
				routing: { send: { type: 'query', property: 'UserId' } },
			},
		],
	},
];
