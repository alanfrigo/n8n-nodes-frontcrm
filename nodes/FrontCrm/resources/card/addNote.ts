import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['addNote'], resource: ['card'] };

export const cardAddNoteDescription: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the card to add a note to',
	},
	{
		displayName: 'Content',
		name: 'content',
		type: 'string',
		required: true,
		typeOptions: { rows: 4 },
		default: '',
		displayOptions: { show: showFor },
		description: 'Content of the note',
		routing: { send: { type: 'body', property: 'content' } },
	},
];
