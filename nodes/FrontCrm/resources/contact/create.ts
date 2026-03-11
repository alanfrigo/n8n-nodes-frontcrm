import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['create'], resource: ['contact'] };

export const contactCreateDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phoneNumber',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Contact phone number (E.164 format recommended)',
		routing: { send: { type: 'body', property: 'phoneNumber' } },
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		displayOptions: { show: showFor },
		description: 'Contact full name',
		routing: { send: { type: 'body', property: 'name' } },
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
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				routing: { send: { type: 'body', property: 'email' } },
			},
		],
	},
];
