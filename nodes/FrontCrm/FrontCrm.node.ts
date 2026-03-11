import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
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
		icon: { light: 'file:../../icons/frontcrm.svg', dark: 'file:../../icons/frontcrm.dark.svg' },
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
}
