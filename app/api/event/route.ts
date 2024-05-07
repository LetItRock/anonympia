import {Novu, TriggerRecipientsTypeEnum} from '@novu/node';

// Initialize Novu with your API key
const novu = new Novu(process.env.NOVU_API_KEY ?? "");

export async function GET() {

    const WORKFLOW_TRIGGER_IDENTIFIER = "partyevent-ljSkE3yts"

    try {
        console.log("StartEvent");
        // await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
        //     to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey: 'all-subscribers' }],
        //     payload: { },
        // });

        // await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
        //     to: { subscriberId: 'subscriber-17',
        //         email: "zac@novu.co"
        //     },
        //     payload: { },
        // });

        return new Response(
            JSON.stringify({ message: "Success",  }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );

    } catch (error) {

        console.error('Error triggering Novu event:', error);
        return new Response(
            JSON.stringify({ message: "Internal Server Error", error: error }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }

}
