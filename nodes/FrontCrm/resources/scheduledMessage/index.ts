import type { INodeProperties } from 'n8n-workflow';
import { scheduledMessageGetAllDescription } from './getAll';
import { scheduledMessageCreateDescription } from './create';
import { scheduledMessageGetDescription } from './get';
import { scheduledMessageUpdateDescription } from './update';
import { scheduledMessageCancelDescription } from './cancel';
import { scheduledMessageBatchCancelDescription } from './batchCancel';

const showOnlyForScheduledMessage = { resource: ['scheduledMessage'] };

export const scheduledMessageDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForScheduledMessage },
		options: [
			{
				name: 'Batch Cancel',
				value: 'batchCancel',
				action: 'Cancel multiple scheduled messages',
				description: 'Cancel multiple scheduled messages',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '/v1/scheduled-message/batch/cancel',
					},
				},
			},
			{
				name: 'Cancel',
				value: 'cancel',
				action: 'Cancel a scheduled message',
				description: 'Cancel a scheduled message',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '=/v1/scheduled-message/{{$parameter.scheduledMessageId}}/cancel',
					},
				},
			},
			{
				name: 'Create',
				value: 'create',
				action: 'Create a new scheduled message',
				description: 'Create a new scheduled message',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'POST',
						url: '/v1/scheduled-message',
					},
				},
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a scheduled message by ID',
				description: 'Get a scheduled message by ID',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '=/v1/scheduled-message/{{$parameter.scheduledMessageId}}',
					},
				},
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Retrieve many scheduled messages',
				description: 'Retrieve many scheduled messages',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'GET',
						url: '/v1/scheduled-message',
					},
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a scheduled message',
				description: 'Update a scheduled message',
				routing: {
					request: {
						baseURL: 'https://api.wts.chat/chat',
						method: 'PUT',
						url: '=/v1/scheduled-message/{{$parameter.scheduledMessageId}}',
					},
				},
			},
		],
		default: 'getAll',
	},
	...scheduledMessageGetAllDescription,
	...scheduledMessageCreateDescription,
	...scheduledMessageGetDescription,
	...scheduledMessageUpdateDescription,
	...scheduledMessageCancelDescription,
	...scheduledMessageBatchCancelDescription,
];
