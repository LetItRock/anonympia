'use client';

const baseUrl = process.env.VERCEL_URL
  ? `https://anonympia.vercel.app`
  : 'http://localhost:4000';

export default function Dashboard() {
  const onClickHandler = () => {
    fetch(`${baseUrl}/api/ddos`, {
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
  };

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={onClickHandler}
      >
        Click me!
      </button>
    </div>
  );
}
