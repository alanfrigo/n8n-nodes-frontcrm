import {
	NodeConnectionTypes,
	type INodeType,
	type INodeTypeDescription,
	type ILoadOptionsFunctions,
	type INodePropertyOptions,
} from 'n8n-workflow';
import { frontCrmApiRequest } from './shared/transport';
import { cardDescription } from './resources/card';
import { channelDescription } from './resources/channel';
import { chatbotDescription } from './resources/chatbot';
import { contactDescription } from './resources/contact';
import { conversationDescription } from './resources/conversation';
import { customFieldDescription } from './resources/customField';
import { departmentDescription } from './resources/department';
import { fileDescription } from './resources/file';
import { messageDescription } from './resources/message';
import { portfolioDescription } from './resources/portfolio';
import { scheduledMessageDescription } from './resources/scheduledMessage';
import { tagDescription } from './resources/tag';
import { webhookDescription } from './resources/webhook';

export class FrontCrm implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'FrontCRM',
		name: 'frontCrm',
		icon: { light: 'file:../../icons/frontcrm.svg', dark: 'file:../../icons/frontcrm.svg' },
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the FrontCRM API — manage contacts, conversations, messages, CRM cards, and more',
		defaults: { name: 'FrontCRM' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [{ name: 'frontCrmApi', required: true }],
		requestDefaults: {
			baseURL: 'https://api.wts.chat/core',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Card', value: 'card' },
					{ name: 'Channel', value: 'channel' },
					{ name: 'Chatbot', value: 'chatbot' },
					{ name: 'Contact', value: 'contact' },
					{ name: 'Conversation', value: 'conversation' },
					{ name: 'Custom Field', value: 'customField' },
					{ name: 'Department', value: 'department' },
					{ name: 'File', value: 'file' },
					{ name: 'Message', value: 'message' },
					{ name: 'Portfolio', value: 'portfolio' },
					{ name: 'Scheduled Message', value: 'scheduledMessage' },
					{ name: 'Tag', value: 'tag' },
					{ name: 'Webhook', value: 'webhook' },
				],
				default: 'contact',
			},
			...cardDescription,
			...channelDescription,
			...chatbotDescription,
			...contactDescription,
			...conversationDescription,
			...customFieldDescription,
			...departmentDescription,
			...fileDescription,
			...messageDescription,
			...portfolioDescription,
			...scheduledMessageDescription,
			...tagDescription,
			...webhookDescription,
		],
	};

	methods = {
		loadOptions: {
			async getDepartments(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'core', '/v2/department');
				const departments = Array.isArray(data) ? data : (data?.data ?? []);
				return departments.map((d: { id: string; name?: string }) => ({
					name: d.name ?? d.id,
					value: d.id,
				}));
			},

			async getChannels(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'chat', '/v1/channel');
				const channels = Array.isArray(data) ? data : (data?.data ?? []);
				return channels.map((c: { id: string; name?: string; number?: string }) => ({
					name: c.name ?? c.number ?? c.id,
					value: c.id,
				}));
			},

			async getPortfolios(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'core', '/v1/portfolio');
				const portfolios = Array.isArray(data) ? data : (data?.data ?? []);
				return portfolios.map((p: { id: string; name?: string }) => ({
					name: p.name ?? p.id,
					value: p.id,
				}));
			},

			async getTags(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'core', '/v1/tag');
				const tags = Array.isArray(data) ? data : (data?.data ?? []);
				return tags.map((t: { id: string; name?: string }) => ({
					name: t.name ?? t.id,
					value: t.id,
				}));
			},

			async getChatbots(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'chat', '/v1/chatbot');
				const chatbots = Array.isArray(data) ? data : (data?.data ?? []);
				return chatbots.map((b: { id: string; name?: string }) => ({
					name: b.name ?? b.id,
					value: b.id,
				}));
			},

			async getCustomFields(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'core', '/v1/custom-field');
				const fields = Array.isArray(data) ? data : (data?.data ?? []);
				return fields.map((f: { id: string; name?: string; key?: string }) => ({
					name: f.name ?? f.key ?? f.id,
					value: f.id,
				}));
			},

			async getPanels(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'core', '/v1/panel');
				const panels = Array.isArray(data) ? data : (data?.data ?? []);
				return panels.map((p: { id: string; name?: string }) => ({
					name: p.name ?? p.id,
					value: p.id,
				}));
			},

			async getUsers(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const data = await frontCrmApiRequest.call(this, 'GET', 'core', '/v1/user');
				const users = Array.isArray(data) ? data : (data?.data ?? []);
				return users.map((u: { id: string; name?: string; email?: string }) => ({
					name: u.name ?? u.email ?? u.id,
					value: u.id,
				}));
			},
		},
	};
}
