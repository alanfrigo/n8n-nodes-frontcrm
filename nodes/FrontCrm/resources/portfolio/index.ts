import type { INodeProperties } from 'n8n-workflow';
import { portfolioGetAllDescription } from './getAll';
import { portfolioListContactsDescription } from './listContacts';
import { portfolioAddContactDescription } from './addContact';
import { portfolioRemoveContactDescription } from './removeContact';
import { portfolioBatchAddContactsDescription } from './batchAddContacts';
import { portfolioBatchRemoveContactsDescription } from './batchRemoveContacts';

const showOnlyForPortfolio = { resource: ['portfolio'] };

export const portfolioDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForPortfolio },
		options: [
			{
				name: 'Add Contact',
				value: 'addContact',
				action: 'Add contact to portfolio',
				description: 'Add a contact to a portfolio',
				routing: {
					request: { method: 'POST', url: '=/v1/portfolio/{{$parameter.portfolioId}}/contact' },
				},
			},
			{
				name: 'Batch Add Contacts',
				value: 'batchAddContacts',
				action: 'Batch add contacts to portfolio',
				description: 'Add multiple contacts to a portfolio using filter criteria',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/portfolio/{{$parameter.portfolioId}}/contact/batch',
					},
				},
			},
			{
				name: 'Batch Remove Contacts',
				value: 'batchRemoveContacts',
				action: 'Batch remove contacts from portfolio',
				description: 'Remove multiple contacts from a portfolio using filter criteria',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/portfolio/{{$parameter.portfolioId}}/contact/batch',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many portfolios',
				description: 'Retrieve a list of portfolios',
				routing: { request: { method: 'GET', url: '/v1/portfolio' } },
			},
			{
				name: 'List Contacts',
				value: 'listContacts',
				action: 'List portfolio contacts',
				description: 'Retrieve contacts associated with a portfolio',
				routing: {
					request: { method: 'GET', url: '=/v1/portfolio/{{$parameter.portfolioId}}/contact' },
				},
			},
			{
				name: 'Remove Contact',
				value: 'removeContact',
				action: 'Remove contact from portfolio',
				description: 'Remove a contact from a portfolio',
				routing: {
					request: { method: 'DELETE', url: '=/v1/portfolio/{{$parameter.portfolioId}}/contact' },
				},
			},
		],
		default: 'getAll',
	},
	...portfolioGetAllDescription,
	...portfolioListContactsDescription,
	...portfolioAddContactDescription,
	...portfolioRemoveContactDescription,
	...portfolioBatchAddContactsDescription,
	...portfolioBatchRemoveContactsDescription,
];
