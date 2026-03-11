import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['listNotes'], resource: ['card'] };

export const cardListNotesDescription: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the card to list notes for',
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
];
