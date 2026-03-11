import type { INodeProperties } from 'n8n-workflow';

const showFor = { operation: ['updateAgents'], resource: ['department'] };

export const departmentUpdateAgentsDescription: INodeProperties[] = [
	{
		displayName: 'Department ID',
		name: 'departmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: showFor },
		description: 'ID of the department',
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
