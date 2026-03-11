import type {
	IHookFunctions,
	IExecuteFunctions,
	IExecuteSingleFunctions,
	ILoadOptionsFunctions,
	IHttpRequestMethods,
	IDataObject,
	IHttpRequestOptions,
} from 'n8n-workflow';

export async function frontCrmApiRequest(
	this: IHookFunctions | IExecuteFunctions | IExecuteSingleFunctions | ILoadOptionsFunctions,
	method: IHttpRequestMethods,
	baseURL: 'core' | 'chat',
	resource: string,
	qs: IDataObject = {},
	body: IDataObject | undefined = undefined,
) {
	const options: IHttpRequestOptions = {
		method,
		qs,
		body,
		url: `https://api.wts.chat/${baseURL}${resource}`,
		json: true,
	};
	return this.helpers.httpRequestWithAuthentication.call(this, 'frontCrmApi', options);
}
