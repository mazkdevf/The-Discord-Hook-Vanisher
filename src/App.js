import React from 'react';
import fetch from 'node-fetch';

function App() {
  const [showAlert, setShowAlert] = React.useState(false);
  const [showMessage, setAlertMessage] = React.useState("");

  async function submit(event) {
    event.preventDefault();

    const webhook = document.getElementById("webhook").value;

    try {
      fetch(webhook, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "content": "Webhook Deleted By Webhook Deleter 2206"
        })
      }).then(res => {
        if (res.status === 204) {
          setAlertMessage("Webhook Deleted Successfully");
          setShowAlert(true);
        } else {
          setAlertMessage(res.statusText ?? "Invalid Webhook");
          setShowAlert(true);
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {showAlert ? (
          <div className='w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0'>
            <div className={"flex p-4 rounded-lg mb-10 bg-gray-800"}>
              <div className="ml-3 text-sm font-bold text-gray-300">
                {showMessage}
              </div>
              <button type='button' onClick={() => setShowAlert(false)} className="ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 focus:ring-gray-400 p-1.5 inline-flex h-8 w-8 bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white">
                <span className="sr-only">Dismiss</span>
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        ) : null}
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl text-white text-center">
              Webhook Deleter 2206
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submit}>
              <div>
                <input type="text" id="webhook" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-gray-600 focus:border-pri>gray-600 block w-full p-2.5" placeholder="https://discordapp.com/webhook/???????????" required="" />
              </div>
              <button type="submit" className="w-full text-center text-white bg-[#0f1318] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 items-center focus:ring-gray-500 hover:bg-[#050708]/30 mr-2 mb-2">
                Delete Webhook
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
