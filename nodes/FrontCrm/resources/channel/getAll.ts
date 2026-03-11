import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['getAll'], resource: ['channel'] };

export const channelGetAllDescription: INodeProperties[] = [
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'Channel Type',
				name: 'channelType',
				type: 'options',
				options: [
					{ name: 'All', value: 'All' },
					{ name: 'WhatsApp', value: 'Whatsapp' },
					{ name: 'Messenger', value: 'Messenger' },
					{ name: 'Instagram', value: 'Instagram' },
				],
				default: 'All',
				routing: { send: { type: 'query', property: 'ChannelType' } },
			},
		],
	},
];
