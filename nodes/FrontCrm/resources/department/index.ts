import type { INodeProperties } from 'n8n-workflow';
import { departmentCreateDescription } from './create';
import { departmentGetAllDescription } from './getAll';
import { departmentGetDescription } from './get';
import { departmentUpdateDescription } from './update';
import { departmentDeleteDescription } from './delete';
import { departmentUpdateAgentsDescription } from './updateAgents';
import { departmentListChannelsDescription } from './listChannels';

const showOnlyForDepartment = { resource: ['department'] };

export const departmentDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForDepartment },
		options: [
			{
				name: 'Create',
				value: 'create',
				action: 'Create a department',
				description: 'Create a new department',
				routing: { request: { method: 'POST', url: '/v1/department' } },
			},
			{
				name: 'Delete',
				value: 'delete',
				action: 'Delete a department',
				description: 'Delete a department by ID',
				routing: { request: { method: 'DELETE', url: '=/v1/department/{{$parameter.departmentId}}' } },
			},
			{
				name: 'Get',
				value: 'get',
				action: 'Get a department',
				description: 'Retrieve a department by ID',
				routing: { request: { method: 'GET', url: '=/v1/department/{{$parameter.departmentId}}' } },
			},
			{
				name: 'Get Many',
				value: 'getAll',
				action: 'Get many departments',
				description: 'Retrieve a list of departments',
				routing: { request: { method: 'GET', url: '/v2/department' } },
			},
			{
				name: 'List Channels',
				value: 'listChannels',
				action: 'List department channels',
				description: 'Retrieve the channels associated with a department',
				routing: {
					request: { method: 'GET', url: '=/v1/department/{{$parameter.departmentId}}/channel' },
				},
			},
			{
				name: 'Update',
				value: 'update',
				action: 'Update a department',
				description: 'Update a department by ID',
				routing: { request: { method: 'PUT', url: '=/v1/department/{{$parameter.departmentId}}' } },
			},
			{
				name: 'Update Agents',
				value: 'updateAgents',
				action: 'Update department agents',
				description: 'Update the agents assigned to a department',
				routing: {
					request: { method: 'PUT', url: '=/v1/department/{{$parameter.departmentId}}/agents' },
				},
			},
		],
		default: 'getAll',
	},
	...departmentCreateDescription,
	...departmentGetAllDescription,
	...departmentGetDescription,
	...departmentUpdateDescription,
	...departmentDeleteDescription,
	...departmentUpdateAgentsDescription,
	...departmentListChannelsDescription,
];
