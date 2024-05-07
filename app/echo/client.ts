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
  async ({ step, subscriber }) => {

    await step.email(
      'send-email-1',
      async (inputs) => {
        return {
          subject: 'We have the fluffiest of croissants, but no wine to enjoy them with',
          body: renderInvite({
              firstName: subscriber?.firstName ?? "Anonypian",
              lastName: subscriber?.lastName ?? "Citizen"
          }),

        };
      },
        {
          inputSchema: {},
        }
    );

    await step.delay("delay-1m-1",
        async (inputs) => {
          return {
            amount: 1,
            unit: "minutes",
          }
        },
    );

    await step.email(
        'send-email-2',
        async (inputs) => {
          return {
            subject: 'Reminder For THE EVENT',
            body: renderReminder({
                firstName: subscriber?.firstName ?? "Anonypian" ,
                lastName: subscriber?.lastName ?? "Citizen"
            }),
          };
        },
        {
          inputSchema: {},
        }
    );

      await step.delay("delay-1m-2",
          async (inputs) => {
              return {
                  amount: 1,
                  unit: "minutes",
              }
          },

      );


    await step.email(
        'send-email-3',
        async (inputs) => {
          return {
            subject: 'It is Time',
            body: renderCommence({
                firstName: subscriber?.firstName ?? "Anonypian",
                lastName: subscriber?.lastName ?? "Citizen"
            }),
          };
        },
        {
          inputSchema: {},
        }
    );

  },
  { payloadSchema: { type: 'object', properties: {} } }
);

echo.workflow("Novarian-DDOS", async ({ step, subscriber }) => {
      await step.email(
          'send-ddos-email',
          async (inputs) => {
            console.log('inputs', inputs);
            return {
              subject: 'Vinotifica Shall Not Send Stale Wine',
              body: renderDdos({
                  firstName: subscriber.firstName ?? "firstName",
                  lastName: subscriber.lastName ?? "lastName"
              }),
            };
          },
      );
    } ,
    { payloadSchema: { type: 'object', properties: {} } }
    )
