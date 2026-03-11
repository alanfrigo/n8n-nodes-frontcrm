import type { INodeProperties } from 'n8n-workflow';

export const cardGetDescription: INodeProperties[] = [
	{
		displayName: 'Card ID',
		name: 'cardId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['get'], resource: ['card'] } },
		description: 'ID of the card to retrieve',
	},
];
