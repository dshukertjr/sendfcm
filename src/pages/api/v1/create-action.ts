import type { NextApiRequest, NextApiResponse } from 'next'
import { APP_ID, SITE_URL } from '../../../utils/constans'
import * as hubspot from '@hubspot/api-client'
import {
  ExtensionActionDefinitionInput,
  FieldTypeDefinition,
  InputFieldDefinition,
} from '@hubspot/api-client/lib/codegen/automation/actions/api'
const hubspotClient = new hubspot.Client({ developerApiKey: process.env.DEVELOPER_API_KEY })

type Data = {
  name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>): Promise<void> => {
  try {
    // const some = await hubspotClient.automation.actions.definitionsApi.getPage(APP_ID)
    // console.log(JSON.stringify(some.body.results))
    // console.log('\n')
    // console.log(JSON.stringify(some.body.results.length))
    // for (const action of some.body.results) {
    //   console.log('\n action', action)
    //   await hubspotClient.automation.actions.definitionsApi.archive(action.id, APP_ID)
    // }

    // const another = await hubspotClient.automation.actions.definitionsApi.getPage(APP_ID)
    // console.log('actions after', another.body.results)

    // return
    const response = await hubspotClient.automation.actions.definitionsApi.create(APP_ID, {
      actionUrl: `${SITE_URL}/api/v1/send-fcm-action`,
      inputFields: [
        {
          typeDefinition: {
            name: 'title',
            type: FieldTypeDefinition.TypeEnum.String,
            fieldType: FieldTypeDefinition.FieldTypeEnum.Text,
            options: [],
          },
          supportedValueTypes: [InputFieldDefinition.SupportedValueTypesEnum.StaticValue],
          isRequired: true,
        },
        {
          typeDefinition: {
            name: 'body',
            type: FieldTypeDefinition.TypeEnum.String,
            fieldType: FieldTypeDefinition.FieldTypeEnum.Textarea,
            options: [],
          },
          supportedValueTypes: [InputFieldDefinition.SupportedValueTypesEnum.StaticValue],
          isRequired: false,
        },
      ],
      labels: {
        en: {
          actionName: 'Send FCM',
          actionDescription: 'Send a push notification using Firebase Cloud Messaging',
          actionCardContent: 'Send "{{title}}" as a push notification',
          inputFieldLabels: {
            title: 'Title',
            body: 'Body',
          },
          inputFieldDescriptions: {
            title: 'Title of the notification payload',
            body: 'Body of the notification payload',
          },
        },
        ja: {
          actionName: 'Send FCM',
          actionDescription: 'Firebase Cloud Messagingでプッシュ通知をコンタクトに送信いたします',
          actionCardContent: '「{{title}}」をプッシュ通知で送信',
          inputFieldLabels: {
            title: 'タイトル',
            body: '本文',
          },
          inputFieldDescriptions: {
            title: '通知の「title」',
            body: '通知の「body」',
          },
        },
      },
      published: true,
      functions: [],
      objectTypes: ['CONTACT'],
    } as ExtensionActionDefinitionInput)

    console.log('response', response)

    // await hubspotClient.automation.actions.functionsApi.createOrReplace(
    //   '1',
    //   'PRE_ACTION_EXECUTION',
    //   'Send FCM',
    //   APP_ID,
    //   JSON.stringify({})
    // )

    // await axios.post(
    //   `https://api.hubapi.com/automationextensions/v1/definitions?hapikey=${process.env.DEVELOPER_API_KEY}&applicationId=${APP_ID}`,
    //   {
    //     integrationAppId: APP_ID,
    //     extensionName: 'Send FCM',
    //     webhookUrl: `${SITE_URL}/api/send-fcm-action`,
    //     fieldMetadata: [
    //       {
    //         label: 'Appointment Summary',
    //         key: 'appointment_title',
    //         fieldType: 'TEXT',
    //         values: [
    //           {
    //             type: 'STATIC_VALUE',
    //             allowsMergeTags: true,
    //           },
    //         ],
    //       },
    //       {
    //         label: 'Requested Appointment Date',
    //         key: 'appointment_date',
    //         fieldType: 'DATE',
    //         values: [
    //           {
    //             type: 'OBJECT_PROPERTY',
    //           },
    //         ],
    //       },
    //       {
    //         label: 'Appointment Notes',
    //         key: 'appointment_notes',
    //         fieldType: 'TEXTAREA',
    //         values: [
    //           {
    //             type: 'STATIC_VALUE',
    //             allowsMergeTags: true,
    //           },
    //         ],
    //       },
    //     ],
    //   }
    // )
  } catch (e) {
    console.log('\n e', e)
    console.log('\n error body errors', (e as any).response.body.errors)
  }

  res.status(200).json({ name: 'John Doe' })
}

export default handler
