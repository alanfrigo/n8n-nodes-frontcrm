import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['create'], resource: ['card'] };

export const cardCreateDescription: INodeProperties[] = [
	{
		displayName: 'Panel ID',
		name: 'panelId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the panel/pipeline to create the card in',
		routing: { send: { type: 'body', property: 'panelId' } },
	},
	{
		displayName: 'Title',
		name: 'title',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Title of the card',
		routing: { send: { type: 'body', property: 'title' } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Step ID',
				name: 'stepId',
				type: 'string',
				default: '',
				description: 'Pipeline step/stage ID',
				routing: { send: { type: 'body', property: 'stepId' } },
			},
			{
				displayName: 'Contact ID',
				name: 'contactId',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'contactId' } },
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
