import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['getUploadUrl'], resource: ['file'] };

export const fileGetUploadUrlDescription: INodeProperties[] = [
	{
		displayName: 'File Type',
		name: 'fileType',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'File type (e.g. IMAGE, DOCUMENT, AUDIO, VIDEO)',
		routing: { send: { type: 'query', property: 'Type' } },
	},
	{
		displayName: 'File Name',
		name: 'fileName',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'File name including extension',
		routing: { send: { type: 'query', property: 'Name' } },
	},
	{
		displayName: 'Optional Fields',
		name: 'optionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: showFor },
		options: [
			{
				displayName: 'MIME Type',
				name: 'mimeType',
				type: 'string',
				default: '',
				description: 'MIME type (e.g. image/jpeg)',
				routing: { send: { type: 'query', property: 'MimeType' } },
			},
		],
	},
];
