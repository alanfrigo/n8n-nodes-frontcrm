import type { INodeProperties } from 'n8n-workflow';

export const contactUpdateByIdDescription: INodeProperties[] = [
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['updateById'], resource: ['contact'] } },
		description: 'ID of the contact to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFieldsById',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { operation: ['updateById'], resource: ['contact'] } },
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'name' } },
			},
			{
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				routing: { send: { type: 'body', property: 'email' } },
			},
			{
				displayName: 'Phone Number',
				name: 'phoneNumber',
				type: 'string',
				default: '',
				routing: { send: { type: 'body', property: 'phoneNumber' } },
			},
		],
	},
];
