import type { INodeProperties } from 'n8n-workflow';
import { messageSendAsyncDescription } from './sendAsync';
import { messageSendSyncDescription } from './sendSync';
import { messageGetByIdDescription } from './getById';
import { messageGetStatusDescription } from './getStatus';
import { messageDeleteDescription } from './delete';
import { messageGetAllDescription } from './getAll';
import { messageSendSessionMessageDescription } from './sendSessionMessage';
import { messageSendSessionMessageSyncDescription } from './sendSessionMessageSync';
import { messageListSessionMessagesDescription } from './listSessionMessages';

const showOnlyForMessage = { resource: ['message'] };

export const messageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForMessage },
		options: [
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a message',
				description: 'Delete a message',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'DELETE',
						url: '=/v1/message/{{$parameter.messageId}}',
					},
				},
			},
			{
				name: 'Get',
				value: 'getById',
				action: 'Get a message by ID',
				description: 'Get a message by ID',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '=/v1/message/{{$parameter.messageId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Retrieve many messages',
				description: 'Retrieve many messages',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '/v1/message',
					},
				},
			},
			{
				name: 'Get Status',
				value: 'getStatus',
				action: 'Get the delivery status of a message',
				description: 'Get the delivery status of a message',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '=/v1/message/{{$parameter.messageId}}/status',
					},
				},
			},
			{
				name: 'List Session Messages',
				value: 'listSessionMessages',
				action: 'List all messages in a session',
				description: 'List all messages in a session',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '=/v1/session/{{$parameter.sessionId}}/message',
					},
				},
			},
			{
				name: 'Send (Async)',
				value: 'sendAsync',
				action: 'Send a message asynchronously',
				description: 'Send a message asynchronously',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '/v1/message/send',
					},
				},
			},
			{
				name: 'Send (Sync)',
				value: 'sendSync',
				action: 'Send a message synchronously',
				description: 'Send a message synchronously',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '/v1/message/send-sync',
					},
				},
			},
			{
				name: 'Send Session Message (Async)',
				value: 'sendSessionMessage',
				action: 'Send a message in a session asynchronously',
				description: 'Send a message in a session asynchronously',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '=/v1/session/{{$parameter.sessionId}}/message',
					},
				},
			},
			{
				name: 'Send Session Message (Sync)',
				value: 'sendSessionMessageSync',
				action: 'Send a message in a session synchronously',
				description: 'Send a message in a session synchronously',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '=/v1/session/{{$parameter.sessionId}}/message-sync',
					},
				},
			},
		],
		default: 'sendAsync',
	},
	...messageSendAsyncDescription,
	...messageSendSyncDescription,
	...messageGetByIdDescription,
	...messageGetStatusDescription,
	...messageDeleteDescription,
	...messageGetAllDescription,
	...messageSendSessionMessageDescription,
	...messageSendSessionMessageSyncDescription,
	...messageListSessionMessagesDescription,
];
