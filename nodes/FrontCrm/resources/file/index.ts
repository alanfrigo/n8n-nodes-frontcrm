import type { INodeProperties } from 'n8n-workflow';
import { fileGetUploadUrlDescription } from './getUploadUrl';
import { fileSaveDescription } from './save';

const showOnlyForFile = { resource: ['file'] };

export const fileDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForFile },
		options: [
			{
				name: 'Get Upload URL',
				value: 'getUploadUrl',
				action: 'Get upload URL',
				description: 'Get a pre-signed URL for file upload',
				routing: { request: { method: 'GET', url: '/v2/file' } },
			},
			{
				name: 'Save File',
				value: 'save',
				action: 'Save file',
				description: 'Save/confirm a file upload',
				routing: { request: { method: 'POST', url: '/v2/file' } },
			},
		],
		default: 'getUploadUrl',
	},
	...fileGetUploadUrlDescription,
	...fileSaveDescription,
];
