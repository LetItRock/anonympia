const { Novu } = require('@novu/node');

// Initialize the Novu client with your API key
const novu = new Novu('YOUR_API_KEY'); //

// Convert the provided data into the required structure
const subscribers = [
    { subscriberId: 'subscriber-1', firstName: "Aliaksandr", lastName: "Ryzhou", email: "aliaksandr@novu.co" },
    { subscriberId: 'subscriber-2', firstName: "Dima", lastName: "Grossman", email: "dima@novu.co" },
    { subscriberId: 'subscriber-3', firstName: "Pawan", lastName: "Jain", email: "pawan@novu.co" },
    { subscriberId: 'subscriber-4', firstName: "Paweł", lastName: "Tymczuk", email: "pawel@novu.co" },
    { subscriberId: 'subscriber-5', firstName: "Gal", lastName: "Tidhar", email: "gal@novu.co" },
    { subscriberId: 'subscriber-6', firstName: "Gali", lastName: "Ainouz", email: "gali@novu.co" },
    { subscriberId: 'subscriber-7', firstName: "George", lastName: "Djabarov", email: "george@novu.co" },
    { subscriberId: 'subscriber-8', firstName: "Richard", lastName: "Fontein", email: "richard@novu.co" },
    { subscriberId: 'subscriber-9', firstName: "Justin", lastName: "Nemmers", email: "nevo@novu.co" },
    { subscriberId: 'subscriber-10', firstName: "Ryan", lastName: "Reynolds", email: "ryan@novu.co" },
    { subscriberId: 'subscriber-11', firstName: "Radek", lastName: "Gozdzialski", email: "radek@novu.co" },
    { subscriberId: 'subscriber-12', firstName: "Emil", lastName: "Pearce", email: "emil@novu.co" },
    { subscriberId: 'subscriber-13', firstName: "Prosper", lastName: "Otemuyiwa", email: "prosper@novu.co" },
    { subscriberId: 'subscriber-14', firstName: "Tomer", lastName: "Barnea", email: "tomer@novu.co" },
    { subscriberId: 'subscriber-15', firstName: "Joel", lastName: "Anton", email: "joel@novu.co" },
    { subscriberId: 'subscriber-16', firstName: "Sokratis", lastName: "Vidros", email: "sokratis@novu.co" },
    { subscriberId: 'subscriber-17', firstName: "Zac", lastName: "Clifton", email: "zac@novu.co" },
    { subscriberId: 'subscriber-18', firstName: "Sumit", lastName: "Saurabh", email: "sumit@novu.co" },
    { subscriberId: 'subscriber-19', firstName: "Nikolay", lastName: "Knyshov", email: "nikolay@novu.co" },
    { subscriberId: 'subscriber-20', firstName: "Matan", lastName: "Dov", email: "matan@novu.co" },
    { subscriberId: 'subscriber-21', firstName: "Tamar", lastName: "Amoza", email: "tamar@novu.co" },
    { subscriberId: 'subscriber-22', firstName: "Biswajeet", lastName: "Das", email: "biswa@novu.co" },
    { subscriberId: 'subscriber-23', firstName: "Kevin", lastName: "Damaso", email: "kevin@novu.co" },
    { subscriberId: 'subscriber-24', firstName: "Denis", lastName: "Kralj", email: "denis@novu.co" },
    { subscriberId: 'subscriber-25', firstName: "Adam", lastName: "Chmara", email: "adam@novu.co" }
];

// Function to create subscribers in bulk
async function createSubscribers() {
    try {
        await novu.subscribers.bulkCreate(subscribers);
        console.log("Subscribers added successfully!");
    } catch (error) {
        console.error("Error adding subscribers:", error.message);
    }
}

// Run the function
createSubscribers();
