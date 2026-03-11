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
				displayName: 'Responsible User ID',
				name: 'responsibleUserId',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'responsibleUserId' } },
			},
		],
	},
];
