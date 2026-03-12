import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['updateAgents'], resource: ['department'] };

export const departmentUpdateAgentsDescription: INodeProperties[] = [
	{
		displayName: 'Department Name or ID',
		name: 'departmentId',
		type: 'options',
		typeOptions: { loadOptionsMethod: 'getDepartments' },
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the department. Choose from the list, or specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
	},
	{
		displayName: 'Agents',
		name: 'agents',
		type: 'string',
		typeOptions: { multipleValues: true },
		default: [],
		displayOptions: { show: showFor },
		description: 'List of agent user IDs to assign to this department',
		routing: { send: { type: 'body', property: 'agents' } },
	},
];
