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
				displayName: 'Channel ID',
				name: 'channelId',
				type: 'string',
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
				displayName: 'Department ID',
				name: 'departmentId',
				type: 'string',
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
				displayName: 'User ID',
				name: 'userId',
				type: 'string',
				default: '',
				routing: { send: { type: 'query', property: 'UserId' } },
			},
		],
	},
];
