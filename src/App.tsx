import React from 'react';
import { ConnectKitButton } from 'connectkit';
import { useAccount } from "wagmi";

const App = () => {

  const {isConnected, isDisconnected } = useAccount();

  if (isConnected) {
    return  <div> Check elegibility</div> 
};
  if (isDisconnected) {return (
    <div>
    <div className='items-center h-100 bg-gradient-to-r from-indigo-700 to-indigo-900 p-20'>
      <h1 className='text-white text-6xl text-center font-bold my-10'>Borrow stablecoins from your pals</h1>
      <p className='text-white text-xl text-center font-bold pb-10'>Check, earn points, protect your friendship</p>
    </div>
    
<div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
    <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="p-4 md:p-5">
        <div className="flex">
          <svg className="mt-1 flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

          <div className="grow ms-5">
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Permissionless and International
            </h3>
            <p className="text-sm text-gray-500">
              Borrow to a friend without limits
            </p>
          </div>
        </div>
      </div>
    </a>

    <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="p-4 md:p-5">
        <div className="flex">
          <svg className="mt-1 flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>

          <div className="grow ms-5">
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Don't trust, verify 
            </h3>
            <p className="text-sm text-gray-500">
              Before borrowing to a friend, check their historical GHO balance
            </p>
          </div>
        </div>
      </div>
    </a>


    <a className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
      <div className="p-4 md:p-5">
        <div className="flex">
          <svg className="mt-1 flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"/><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"/></svg>

          <div className="grow ms-5">
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Email us
            </h3>
            <p className="text-sm text-gray-500">
              Reach us at <span className="text-blue-600 font-medium dark:text-blue-500">info@site.com</span>
            </p>
          </div>
        </div>
      </div>
    </a>

  </div>

</div>


    </div>


  );
  }

  return null;
};

export default App;
