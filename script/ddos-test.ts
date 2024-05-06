// @ts-ignore
const { Novu } = require('@novu/node');

async function triggerDDos() {

    // Initialize Novu client with your API key
    const novu = new Novu('YOUR_API_KEY');

    // Define the workflow trigger identifier
    const WORKFLOW_TRIGGER_IDENTIFIER = 'Novarian-DDOS';

    // Define the subscribers
    const subscribers = [
        { subscriberId: 'dima', email: 'dima@novu.co' },
        { subscriberId: 'justin', email: 'nevo@novu.co' },
        { subscriberId: 'gali', email: 'gali@novu.co' },
    ];

    try {

    await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
        to: { subscriberId: "subscriber-17" },
        payload: {
            name: "Hello World",
            organization: { logo: 'https://happycorp.com/logo.png' },
        },
    });


    } catch (error) {
        console.error("Error triggering workflow:", error);
    }
}

triggerWorkflow();
