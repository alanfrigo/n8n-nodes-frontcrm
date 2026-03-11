import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['getByPhone'], resource: ['contact'] };

export const contactGetByPhoneDescription: INodeProperties[] = [
	{
		displayName: 'Phone Number',
		name: 'phone',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'Phone number of the contact',
	},
];
