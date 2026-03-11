import type { INodeProperties } from 'n8n-workflow';

export const departmentListChannelsDescription: INodeProperties[] = [
	{
		displayName: 'Department ID',
		name: 'departmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['listChannels'], resource: ['department'] } },
		description: 'ID of the department',
	},
];
