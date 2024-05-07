'use client'

export default function Dashboard() {

  return (
    <div className="mx-auto flex flex-col max-w-7xl items-center justify-center">
        <p className={"text-black mb-10"}>Help with the event here!</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
            fetch(`/api/ddos`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                // You can add the request body if needed
                // body: JSON.stringify(data)
            })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => {
                    console.error('Error:', error);
                });
        }}
      >
        Click me!
      </button>
    </div>
  );
}
