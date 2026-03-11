import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['manageTagsByPhone'], resource: ['contact'] };

export const contactManageTagsByPhoneDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phone',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Phone number of the contact',
	},
	{
		displayName: 'Action',
		name: 'tagAction',
		type: 'options',
		options: [
			{ name: 'Add Tags', value: 'ADD' },
			{ name: 'Remove Tags', value: 'REMOVE' },
		],
		default: 'ADD',
		displayOptions: { show: showFor },
		routing: { send: { type: 'body', property: 'action' } },
	},
	{
		displayName: 'Tags',
		name: 'tags',
		type: 'string',
		typeOptions: { multipleValues: true },
		default: [],
		displayOptions: { show: showFor },
		description: 'Tags to add or remove',
		routing: { send: { type: 'body', property: 'tags' } },
	},
];
