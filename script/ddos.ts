const { Novu } = require('@novu/node');

// Initialize Novu client with your API key
const novu = new Novu('YOUR_API_KEY');

// Define the workflow trigger identifier
const WORKFLOW_TRIGGER_IDENTIFIER = 'Novarian-DDOS';

// Define the subscribers
const subscribers = [
    { subscriberId: 'subscriber-2' },
    { subscriberId: 'subscriber-9' },
    { subscriberId: 'subscriber-6' },
];

async function triggerWorkflow() {
    try {
        for (const subscriber of subscribers) {
            for (let i = 0; i < 30; i++) { // Repeat 30 times
                await novu.trigger(WORKFLOW_TRIGGER_IDENTIFIER, {
                    to: { subscriberId: subscriber.subscriberId },
                    payload: {
                        name: "Hello World",
                        organization: { logo: 'https://happycorp.com/logo.png' },
                    },
                });
                console.log(`Triggered workflow for ${subscriber.email} - iteration ${i + 1}`);
            }
        }
    } catch (error) {
        console.error("Error triggering workflow:", error.message);
    }
}

triggerWorkflow();
