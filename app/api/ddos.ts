import { Novu } from 'novu';

// Initialize Novu with your API key
const novu = new Novu(process.env.NOVU_API_KEY);

export async function GET(request: Request, responce: Response) {

    const WORKFLOW_TRIGGER_IDENTIFIER = "Novarian-DDOS"

    const subscribers = [
        { subscriberId: 'subscriber-2' },
        { subscriberId: 'subscriber-9' },
        { subscriberId: 'subscriber-6' },
    ];

    try {

        for (const value of subscribers) {

            await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
                to: { subscriberId: value.subscriberId },
                payload: {
                    name: "Hello World",
                    organization: { logo: 'https://happycorp.com/logo.png' },
                },
            });

        }


        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error triggering Novu event:', error);
        res.status(500).json({ error: 'Failed to trigger Novu event' });
    }
}
