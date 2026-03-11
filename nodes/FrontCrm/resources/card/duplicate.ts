import type { INodeProperties } from 'n8n-workflow';

export const cardDuplicateDescription: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['duplicate'], resource: ['card'] } },
		description: 'ID of the card to duplicate',
	},
];
