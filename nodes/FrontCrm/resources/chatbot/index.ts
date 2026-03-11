import type { INodeProperties } from 'n8n-workflow';
import { chatbotGetAllDescription } from './getAll';
import { chatbotExecuteDescription } from './execute';

const showOnlyForChatbot = { resource: ['chatbot'] };

export const chatbotDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForChatbot },
		options: [
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many chatbots',
				description: 'Retrieve a list of chatbots',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '/v1/chatbot',
					},
				},
			},
			{
				name: 'Execute',
				value: 'execute',
				action: 'Execute a chatbot',
				description: 'Execute/send a chatbot',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '/v1/chatbot/send',
					},
				},
			},
		],
		default: 'getAll',
	},
	...chatbotGetAllDescription,
	...chatbotExecuteDescription,
];
