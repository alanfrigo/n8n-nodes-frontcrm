import type { INodeProperties } from 'n8n-workflow';
import { conversationGetAllDescription } from './getAll';
import { conversationGetDescription } from './get';
import { conversationTransferDescription } from './transfer';
import { conversationAssignUserDescription } from './assignUser';
import { conversationCompleteDescription } from './complete';
import { conversationChangeStatusDescription } from './changeStatus';
import { conversationPartialUpdateDescription } from './partialUpdate';

const showOnlyForConversation = { resource: ['conversation'] };

export const conversationDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForConversation },
		options: [
			{
				name: 'Assign User',
				value: 'assignUser',
				action: 'Assign user to a conversation',
				description: 'Assign a user to a conversation',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'PUT',
						url: '=/v1/session/{{$parameter.sessionId}}/assignee',
					},
				},
			},
			{
				name: 'Change Status',
				value: 'changeStatus',
				action: 'Change status of a conversation',
				description: 'Change the status of a conversation',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'PUT',
						url: '=/v1/session/{{$parameter.sessionId}}/status',
					},
				},
			},
			{
				name: 'Complete',
				value: 'complete',
				action: 'Complete a conversation',
				description: 'Mark a conversation as complete',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'PUT',
						url: '=/v1/session/{{$parameter.sessionId}}/complete',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a conversation',
				description: 'Get a conversation by ID',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '=/v2/session/{{$parameter.sessionId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many conversations',
				description: 'Retrieve a list of conversations',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '/v2/session',
					},
				},
			},
			{
				name: 'Partial Update',
				value: 'partialUpdate',
				action: 'Partially update a conversation',
				description: 'Partially update a conversation',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'PUT',
						url: '=/v2/session/{{$parameter.sessionId}}/partial',
					},
				},
			},
			{
				name: 'Transfer',
				value: 'transfer',
				action: 'Transfer a conversation',
				description: 'Transfer a conversation to another department/user',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'PUT',
						url: '=/v1/session/{{$parameter.sessionId}}/transfer',
					},
				},
			},
		],
		default: 'getAll',
	},
	...conversationGetAllDescription,
	...conversationGetDescription,
	...conversationTransferDescription,
	...conversationAssignUserDescription,
	...conversationCompleteDescription,
	...conversationChangeStatusDescription,
	...conversationPartialUpdateDescription,
];
