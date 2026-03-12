import type { INodeProperties } from 'n8n-workflow';

export const departmentListChannelsDescription: INodeProperties[] = [
	{
		displayName: 'Department Name or ID',
		name: 'departmentId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getDepartments' },
		required: true,
		default: '',
		displayOptions: { show: { operation: ['listChannels'], resource: ['department'] } },
		description: 'ID of the department. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
];
