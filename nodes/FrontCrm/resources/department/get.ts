import type { INodeProperties } from 'n8n-workflow';

export const departmentGetDescription: INodeProperties[] = [
	{
		displayName: 'Department ID',
		name: 'departmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['get'], resource: ['department'] } },
		description: 'ID of the department',
	},
];
