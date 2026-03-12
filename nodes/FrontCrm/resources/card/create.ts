import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['create'], resource: ['card'] };

export const cardCreateDescription: INodeProperties[] = [
	{
		displayName: 'Panel Name or ID',
		name: 'panelId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getPanels' },
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the panel/pipeline to create the card in. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
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
