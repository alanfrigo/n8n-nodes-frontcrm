import type {
	IAuthenticateGeneric,
	Icon,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class FrontCrmApi implements ICredentialType {
	name = 'frontCrmApi';
	displayName = 'FrontCRM API';
	icon: Icon = { light: 'file:../icons/frontcrm.png', dark: 'file:../icons/frontcrm.png' };
	documentationUrl = 'https://flwchat.readme.io/reference';
	properties: INodeProperties[] = [
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: { headers: { Authorization: '=Bearer {{$credentials?.accessToken}}' } },
	};
	test: ICredentialTestRequest = {
		request: { baseURL: 'https://api.wts.chat/core', url: '/v1/tag', method: 'GET' },
	};
}
