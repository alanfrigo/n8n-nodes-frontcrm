# n8n-nodes-frontcrm — FrontCRM Node for n8n

An [n8n](https://n8n.io) community node package that integrates with the [FrontCRM](https://flwchat.readme.io/reference) API.

FrontCRM is a customer relationship management platform with messaging, conversation management, and contact tracking capabilities. This node lets you automate interactions with FrontCRM from your n8n workflows.

## Installation

In your n8n instance, go to **Settings > Community Nodes** and install:

```
n8n-nodes-frontcrm
```

Alternatively, if you are running n8n with npm:

```bash
npm install n8n-nodes-frontcrm
```

## Credentials

This node uses an API token for authentication.

1. Log in to your FrontCRM account.
2. Navigate to your account settings and generate an API token.
3. In n8n, create a new **FrontCRM API** credential and paste your API token.

Full API documentation: https://flwchat.readme.io/reference

## Resources and Operations

### Card

| Operation     | Description                      |
| ------------- | -------------------------------- |
| Get Many      | Retrieve multiple cards          |
| Create        | Create a new card                |
| Get           | Retrieve a single card           |
| Update        | Update a card                    |
| Duplicate     | Duplicate a card                 |
| List Notes    | List notes attached to a card    |
| Add Note      | Add a note to a card             |
| Delete Note   | Delete a note from a card        |

### Channel

| Operation | Description               |
| --------- | ------------------------- |
| Get Many  | Retrieve multiple channels |

### Chatbot

| Operation | Description              |
| --------- | ------------------------ |
| Get Many  | Retrieve multiple chatbots |
| Execute   | Execute a chatbot        |

### Contact

| Operation              | Description                              |
| ---------------------- | ---------------------------------------- |
| Get Many               | Retrieve multiple contacts               |
| Create                 | Create a new contact                     |
| Filter                 | Filter contacts by criteria              |
| Get by Phone           | Retrieve a contact by phone number       |
| Update by Phone        | Update a contact by phone number         |
| Get by ID              | Retrieve a contact by ID                 |
| Update by ID           | Update a contact by ID                   |
| Manage Tags by Phone   | Add or remove tags using phone number    |
| Manage Tags by ID      | Add or remove tags using contact ID      |
| Batch Save             | Save multiple contacts at once           |
| List Custom Fields     | List custom fields for contacts          |

### Conversation

| Operation      | Description                        |
| -------------- | ---------------------------------- |
| Get Many       | Retrieve multiple conversations    |
| Get            | Retrieve a single conversation     |
| Transfer       | Transfer a conversation            |
| Assign User    | Assign a user to a conversation    |
| Complete       | Mark a conversation as complete    |
| Change Status  | Change the status of a conversation |
| Partial Update | Partially update a conversation    |

### Custom Field

| Operation | Description                   |
| --------- | ----------------------------- |
| Get Many  | Retrieve multiple custom fields |

### Department

| Operation      | Description                        |
| -------------- | ---------------------------------- |
| Create         | Create a new department            |
| Get Many       | Retrieve multiple departments      |
| Get            | Retrieve a single department       |
| Update         | Update a department                |
| Delete         | Delete a department                |
| Update Agents  | Update agents in a department      |
| List Channels  | List channels in a department      |

### File

| Operation        | Description                    |
| ---------------- | ------------------------------ |
| Get Upload URL   | Get a pre-signed URL for upload |
| Save             | Save an uploaded file          |

### Message

| Operation                       | Description                                  |
| ------------------------------- | -------------------------------------------- |
| Send (Async)                    | Send a message asynchronously                |
| Send (Sync)                     | Send a message synchronously                 |
| Get                             | Retrieve a single message                    |
| Get Status                      | Get the delivery status of a message         |
| Delete                          | Delete a message                             |
| Get Many                        | Retrieve multiple messages                   |
| Send Session Message (Async)    | Send a session message asynchronously        |
| Send Session Message (Sync)     | Send a session message synchronously         |
| List Session Messages           | List messages in a session                   |

### Portfolio

| Operation            | Description                             |
| -------------------- | --------------------------------------- |
| Get Many             | Retrieve multiple portfolios            |
| List Contacts        | List contacts in a portfolio            |
| Add Contact          | Add a contact to a portfolio            |
| Remove Contact       | Remove a contact from a portfolio       |
| Batch Add Contacts   | Add multiple contacts to a portfolio    |
| Batch Remove Contacts | Remove multiple contacts from a portfolio |

### Scheduled Message

| Operation    | Description                          |
| ------------ | ------------------------------------ |
| Get Many     | Retrieve multiple scheduled messages |
| Create       | Create a new scheduled message       |
| Get          | Retrieve a single scheduled message  |
| Update       | Update a scheduled message           |
| Cancel       | Cancel a scheduled message           |
| Batch Cancel | Cancel multiple scheduled messages   |

### Tag

| Operation | Description             |
| --------- | ----------------------- |
| Get Many  | Retrieve multiple tags  |

### Webhook

| Operation             | Description                         |
| --------------------- | ----------------------------------- |
| List Events           | List available webhook events       |
| List Subscriptions    | List existing webhook subscriptions |
| Create Subscription   | Create a new webhook subscription   |
| Get Subscription      | Retrieve a webhook subscription     |
| Update Subscription   | Update a webhook subscription       |
| Delete Subscription   | Delete a webhook subscription       |

## API Documentation

Full FrontCRM API reference: https://flwchat.readme.io/reference

## License

[MIT](LICENSE.md)
