import type { INodeProperties } from 'n8n-workflow';
import { channelGetAllDescription } from './getAll';

const showOnlyForChannel = { resource: ['channel'] };

export const channelDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForChannel },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many channels',
				description: 'Retrieve a list of channels',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '/v1/channel',
					},
				},
			},
		],
		default: 'getAll',
	},
	...channelGetAllDescription,
];
