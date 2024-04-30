import { Echo } from '@novu/echo';
import {renderInvite} from './emails/invite';
import {renderReminder} from "@/app/echo/emails/reminder";
import {renderCommence} from "@/app/echo/emails/commence";
import {renderDdos} from "@/app/echo/emails/ddos";

export const echo = new Echo({
  apiKey: process.env.NOVU_API_KEY,
  devModeBypassAuthentication: process.env.NODE_ENV === 'development',
});

echo.workflow(
  'PartyEvent',
  async ({ step }) => {
    await step.email(
      'send-email-1',
      async (inputs) => {
        console.log('inputs', inputs);
        return {
          subject: 'This is an email subject',
          body: renderInvite(inputs),
        };
      },
        {
          inputSchema: {
            type: 'object',
            properties: {
              firstName: { type: 'string', default: 'alan' },
              lastName: { type: 'string', default: 'turing' },
            },
          },
        }
    );

    await step.delay("delay-1m-1",
        async (inputs) => {
          return {
            // duration: 1,
            amount: 1,
            unit: "minutes",
          }
        },

        );

    await step.email(
        'send-email-2',
        async (inputs) => {
          console.log('inputs', inputs);
          return {
            subject: 'This is an email subject',
            body: renderReminder(inputs),
          };
        },
        {
          inputSchema: {
            type: 'object',
            properties: {
              firstName: { type: 'string', default: 'alan' },
              lastName: { type: 'string', default: 'turing' },
            },
          },
        }
    );

    // await step.delay("delay-1m-2",
    //     async (inputs) => {
    //       return {
    //         // duration: 1,
    //         amount: 1,
    //         unit: "minutes"
    //       }
    //     }
    // );


    await step.email(
        'send-email-3',
        async (inputs) => {
          console.log('inputs', inputs);
          return {
            subject: 'This is an email subject',
            body: renderCommence(inputs),
          };
        },
        {
          inputSchema: {
            type: 'object',
            properties: {
              firstName: { type: 'string', default: 'alan' },
              lastName: { type: 'string', default: 'turing' },
            },
          },
        }
    );

  },
  { payloadSchema: { type: 'object', properties: {} } }
);

echo.workflow("Novarian-DDOS", async ({ step }) => {
      await step.email(
          'send-email-3',
          async (inputs) => {
            console.log('inputs', inputs);
            return {
              subject: 'Vinotifica Shall Not Send Stale Wine',
              body: renderDdos(inputs),
            };
          },
          {
            inputSchema: {
              type: 'object',
              properties: {
                firstName: { type: 'string', default: 'alan' },
                lastName: { type: 'string', default: 'turing' },
              },
            },
          }
      );
    } ,
    { payloadSchema: { type: 'object', properties: {} } }
    )
