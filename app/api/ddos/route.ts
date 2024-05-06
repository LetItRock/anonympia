import { Novu } from '@novu/node';

// Initialize Novu with your API key
const novu = new Novu(process.env.NOVU_API_KEY ?? "");

export async function GET() {

    const WORKFLOW_TRIGGER_IDENTIFIER = "Novarian-DDOS"

    const subscribers = [
        // { subscriberId: 'subscriber-2' },
        // { subscriberId: 'subscriber-9' },
        // { subscriberId: 'subscriber-6' },
        { subscriberId: 'subscriber-17' }
    ];

    try {

        for (const value of subscribers) {

            console.log("ddos")
            await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
                to: { subscriberId: value.subscriberId },
                payload: { },
            });
        }

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
