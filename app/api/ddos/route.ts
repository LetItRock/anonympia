import { Novu } from '@novu/node';

// Initialize Novu with your API key
const novu = new Novu(process.env.NOVU_API_KEY ?? "");

export async function POST() {

    const WORKFLOW_TRIGGER_IDENTIFIER = "novarian-ddos-md546jwaev1-MRSqBZQLx9"

    const subscribers = [
        { subscriberId: 'subscriber-2', firstName: "Dima", lastName: "Grossman", email: "dima@novu.co" },
        { subscriberId: 'subscriber-9', firstName: "Justin", lastName: "Nemmers", email: "nevo@novu.co" },
        { subscriberId: 'subscriber-6', firstName: "Gali", lastName: "Ainouz", email: "gali@novu.co" },
        // { subscriberId: 'subscriber-17' }
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
