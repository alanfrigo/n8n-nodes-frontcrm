import type { INodeProperties } from 'n8n-workflow';

export const departmentDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Department ID',
		name: 'departmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { operation: ['delete'], resource: ['department'] } },
		description: 'ID of the department to delete',
	},
];
