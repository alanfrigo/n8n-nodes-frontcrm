import type { INodeProperties } from 'n8n-workflow';
import { contactGetAllDescription } from './getAll';
import { contactCreateDescription } from './create';
import { contactFilterDescription } from './filter';
import { contactGetByPhoneDescription } from './getByPhone';
import { contactUpdateByPhoneDescription } from './updateByPhone';
import { contactGetByIdDescription } from './getById';
import { contactUpdateByIdDescription } from './updateById';
import { contactManageTagsByPhoneDescription } from './manageTagsByPhone';
import { contactManageTagsByIdDescription } from './manageTagsById';
import { contactBatchSaveDescription } from './batchSave';
import { contactListCustomFieldsDescription } from './listCustomFields';

const showOnlyForContact = { resource: ['contact'] };

export const contactDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForContact },
		options: [
			{
				name: 'Batch Save',
				value: 'batchSave',
				action: 'Batch save contacts',
				description: 'Create or update multiple contacts at once',
				routing: { request: { method: 'POST', url: '/v2/contact/batch' } },
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a contact',
				description: 'Create a new contact',
				routing: { request: { method: 'POST', url: '/v1/contact' } },
			},
			{
				name: 'Filter',
				value: 'filter',
				action: 'Filter contacts',
				description: 'Filter contacts using advanced criteria',
				routing: { request: { method: 'POST', url: '/v1/contact/filter' } },
			},
			{
				name: 'Get by ID',
				value: 'getById',
				action: 'Get contact by ID',
				description: 'Retrieve a contact by ID',
				routing: { request: { method: 'GET', url: '=/v1/contact/{{$parameter.contactId}}' } },
			},
			{
				name: 'Get by Phone',
				value: 'getByPhone',
				action: 'Get contact by phone',
				description: 'Retrieve a contact by phone number',
				routing: { request: { method: 'GET', url: '=/v1/contact/phonenumber/{{$parameter.phone}}' } },
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many contacts',
				description: 'Retrieve a list of contacts',
				routing: { request: { method: 'GET', url: '/v1/contact' } },
			},
			{
				name: 'List Custom Fields',
				value: 'listCustomFields',
				action: 'List contact custom fields',
				description: 'Retrieve available custom fields for contacts',
				routing: { request: { method: 'GET', url: '/v1/contact/custom-field' } },
			},
			{
				name: 'Manage Tags by ID',
				value: 'manageTagsById',
				action: 'Manage contact tags by ID',
				description: 'Add or remove tags from a contact by ID',
				routing: { request: { method: 'POST', url: '=/v1/contact/{{$parameter.contactId}}/tags' } },
			},
			{
				name: 'Manage Tags by Phone',
				value: 'manageTagsByPhone',
				action: 'Manage contact tags by phone',
				description: 'Add or remove tags from a contact by phone',
				routing: {
					request: { method: 'POST', url: '=/v1/contact/phonenumber/{{$parameter.phone}}/tags' },
				},
			},
			{
				name: 'Update by ID',
				value: 'updateById',
				action: 'Update contact by ID',
				description: 'Update a contact by ID',
				routing: { request: { method: 'PUT', url: '=/v2/contact/{{$parameter.contactId}}' } },
			},
			{
				name: 'Update by Phone',
				value: 'updateByPhone',
				action: 'Update contact by phone',
				description: 'Update a contact by phone number',
				routing: { request: { method: 'PUT', url: '=/v1/contact/phonenumber/{{$parameter.phone}}' } },
			},
		],
		default: 'getAll',
	},
	...contactGetAllDescription,
	...contactCreateDescription,
	...contactFilterDescription,
	...contactGetByPhoneDescription,
	...contactUpdateByPhoneDescription,
	...contactGetByIdDescription,
	...contactUpdateByIdDescription,
	...contactManageTagsByPhoneDescription,
	...contactManageTagsByIdDescription,
	...contactBatchSaveDescription,
	...contactListCustomFieldsDescription,
];
