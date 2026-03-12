import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['update'], resource: ['card'] };

export const cardUpdateDescription: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the card to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Title',
				name: 'title',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'title' } },
			},
			{
				displayName: 'Step ID',
				name: 'stepId',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'stepId' } },
			},
			{
				displayName: 'Responsible User Name or ID',
				name: 'responsibleUserId',
				type: 'options',
				description: 'Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
				typeOptions: { loadOptionsMethod: 'getUsers' },
				default: '',
				routing: { send: { type: 'body', property: 'responsibleUserId' } },
			},
		],
	},
];
