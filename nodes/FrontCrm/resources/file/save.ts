import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['save'], resource: ['file'] };

export const fileSaveDescription: INodeProperties[] = [
	{
		displayName: 'File Data',
		name: 'fileData',
		type: 'json',
		default: '{}',
		displayOptions: { show: showFor },
		description: 'File metadata returned from the Get Upload URL operation. See API docs.',
		routing: { send: { type: 'body', property: '/' } },
	},
];
