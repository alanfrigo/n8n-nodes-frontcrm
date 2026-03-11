import type { INodeProperties } from 'n8n-workflow';
import { cardGetAllDescription } from './getAll';
import { cardCreateDescription } from './create';
import { cardGetDescription } from './get';
import { cardUpdateDescription } from './update';
import { cardDuplicateDescription } from './duplicate';
import { cardListNotesDescription } from './listNotes';
import { cardAddNoteDescription } from './addNote';
import { cardDeleteNoteDescription } from './deleteNote';

const showOnlyForCard = { resource: ['card'] };

export const cardDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForCard },
		options: [
			{
				name: 'Add Note',
				value: 'addNote',
				action: 'Add note',
				description: 'Add a note to a CRM card',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/panel/card/{{$parameter.cardId}}/note',
					},
				},
			},
			{
				name: 'Create Card',
				value: 'create',
				action: 'Create card',
				description: 'Create a new CRM card',
				routing: { request: { method: 'POST', url: '/v1/panel/card' } },
			},
			{
				name: 'Delete Note',
				value: 'deleteNote',
				action: 'Delete note',
				description: 'Delete a note from a CRM card',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/panel/card/{{$parameter.cardId}}/note/{{$parameter.noteId}}',
					},
				},
			},
			{
				name: 'Duplicate Card',
				value: 'duplicate',
				action: 'Duplicate card',
				description: 'Duplicate an existing CRM card',
				routing: {
					request: {
						method: 'POST',
						url: '=/v1/panel/card/{{$parameter.cardId}}/duplicate',
					},
				},
			},
			{
				name: 'Get Card',
				value: 'get',
				action: 'Get card',
				description: 'Get a CRM card by ID',
				routing: { request: { method: 'GET', url: '=/v1/panel/card/{{$parameter.cardId}}' } },
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many cards',
				description: 'Retrieve a list of CRM cards',
				routing: { request: { method: 'GET', url: '/v1/panel/card' } },
			},
			{
				name: 'List Notes',
				value: 'listNotes',
				action: 'List notes',
				description: 'List all notes on a CRM card',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/panel/card/{{$parameter.cardId}}/note',
					},
				},
			},
			{
				name: 'Update Card',
				value: 'update',
				action: 'Update card',
				description: 'Update a CRM card',
				routing: { request: { method: 'PUT', url: '=/v2/panel/card/{{$parameter.cardId}}' } },
			},
		],
		default: 'getAll',
	},
	...cardGetAllDescription,
	...cardCreateDescription,
	...cardGetDescription,
	...cardUpdateDescription,
	...cardDuplicateDescription,
	...cardListNotesDescription,
	...cardAddNoteDescription,
	...cardDeleteNoteDescription,
];
