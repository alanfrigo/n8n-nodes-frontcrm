import type { INodeProperties } from 'n8n-workflow';

export const departmentDeleteDescription: INodeProperties[] = [
	{
		displayName: 'Department Name or ID',
		name: 'departmentId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getDepartments' },
		required: true,
		default: '',
		displayOptions: { show: { operation: ['delete'], resource: ['department'] } },
		description: 'ID of the department to delete. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
];
