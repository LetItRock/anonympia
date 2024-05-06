import {Novu, TriggerRecipientsTypeEnum} from '@novu/node';

// Initialize Novu with your API key
const novu = new Novu(process.env.NOVU_API_KEY ?? "");

export async function GET() {

    const WORKFLOW_TRIGGER_IDENTIFIER = "PartyEvent"

    try {
        await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
            to: [{ type: TriggerRecipientsTypeEnum.TOPIC, topicKey: 'all-subscribers' }],
            payload: { },
        });

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
