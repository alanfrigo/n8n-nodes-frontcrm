import type { INodeProperties } from 'n8n-workflow';
import { webhookListEventsDescription } from './listEvents';
import { webhookListSubscriptionsDescription } from './listSubscriptions';
import { webhookCreateSubscriptionDescription } from './createSubscription';
import { webhookGetSubscriptionDescription } from './getSubscription';
import { webhookUpdateSubscriptionDescription } from './updateSubscription';
import { webhookDeleteSubscriptionDescription } from './deleteSubscription';

const showOnlyForWebhook = { resource: ['webhook'] };

export const webhookDescription: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: showOnlyForWebhook },
		options: [
			{
				name: 'Create Subscription',
				value: 'createSubscription',
				action: 'Create subscription',
				description: 'Create a new webhook subscription',
				routing: { request: { method: 'POST', url: '/v1/webhook/subscription' } },
			},
			{
				name: 'Delete Subscription',
				value: 'deleteSubscription',
				action: 'Delete subscription',
				description: 'Delete a webhook subscription',
				routing: {
					request: {
						method: 'DELETE',
						url: '=/v1/webhook/subscription/{{$parameter.subscriptionId}}',
					},
				},
			},
			{
				name: 'Get Subscription',
				value: 'getSubscription',
				action: 'Get subscription',
				description: 'Get a webhook subscription by ID',
				routing: {
					request: {
						method: 'GET',
						url: '=/v1/webhook/subscription/{{$parameter.subscriptionId}}',
					},
				},
			},
			{
				name: 'List Events',
				value: 'listEvents',
				action: 'List events',
				description: 'List available webhook event types',
				routing: { request: { method: 'GET', url: '/v1/webhook/event' } },
			},
			{
				name: 'List Subscriptions',
				value: 'listSubscriptions',
				action: 'List subscriptions',
				description: 'List all webhook subscriptions',
				routing: { request: { method: 'GET', url: '/v1/webhook/subscription' } },
			},
			{
				name: 'Update Subscription',
				value: 'updateSubscription',
				action: 'Update subscription',
				description: 'Update a webhook subscription',
				routing: {
					request: {
						method: 'PUT',
						url: '=/v1/webhook/subscription/{{$parameter.subscriptionId}}',
					},
				},
			},
		],
		default: 'listSubscriptions',
	},
	...webhookListEventsDescription,
	...webhookListSubscriptionsDescription,
	...webhookCreateSubscriptionDescription,
	...webhookGetSubscriptionDescription,
	...webhookUpdateSubscriptionDescription,
	...webhookDeleteSubscriptionDescription,
];
