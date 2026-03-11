import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['deleteNote'], resource: ['card'] };

export const cardDeleteNoteDescription: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the card to delete a note from',
	},
	{
		displayName: 'Note ID',
		name: 'noteId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the note to delete',
	},
];
