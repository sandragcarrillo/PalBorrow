import React, { useState , ChangeEvent} from 'react';
import { useAccount } from "wagmi";
import {
  getRiskLevel,
  getRewards,
  getLimit,
  getPeriod,
  getElegibility,
  getBalance,
  getHistorical,
} from './WalletData';


const App = () => {

  const {isConnected, isDisconnected } = useAccount();
  const [friendWallet, setFriendWallet] = useState('');

  const [friendWalletRisk, setFriendWalletRisk] = useState<string | null>(null);

  const handleFriendWalletChange = (event: ChangeEvent<HTMLInputElement>) => {
    const wallet = event.target.value;
    setFriendWallet(wallet);
  
  

    const risk = getRiskLevel(wallet);

    setFriendWalletRisk(risk);


};


  

  if (isConnected) {
    return  <div> 

    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <rect
                fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Don't trust...</span>
          </span>{' '}
          Just verify
        </h2>
        <input
            type='text'
            placeholder="Paste your friend's wallet here"
            value={friendWallet}
            onChange={handleFriendWalletChange}
            className="w-full rounded-2xl border border-indigo-500 p-2 text-center"
          />
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-2xl font-extrabold">Check elegibility</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
                <svg
                  className="w-10 h-10 text-gray-600"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                >
                  <path
                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Let's see if you can trust</p>
              <ul className="space-y-2">
              <li className="flex items-center">
                  <p className="font-medium text-gray-800">
                    Current balance: {getBalance(friendWallet)}
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="font-medium text-gray-800">
                    Historical balance: {getHistorical(friendWallet)}
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="font-medium text-gray-800">Risk: {friendWalletRisk} </p>
                </li>
                <li className="flex items-center">
                  <p className="font-medium text-gray-800">Elegibility:{getElegibility(friendWallet)}</p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-600">
             This data is only from the wallet you are checking
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
          <div className="mb-6">
            <div className="flex items-center justify-between pb-6 mb-6 border-b">
              <div>
                <p className="text-2xl font-extrabold">Borrow to your friend</p>
              </div>
              <div className="flex items-center justify-center w-24 h-24 rounded-full bg-indigo-50">
                <svg
                  className="w-10 h-10 text-deep-purple-accent-400"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                >
                  <path
                    d="M4,7L4,7 C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h0c1.105,0,2,0.895,2,2v0C6,6.105,5.105,7,4,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M6,21H3v-4 l-2,0v-5c0-1.105,0.895-2,2-2h1"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M20,7L20,7 c1.105,0,2-0.895,2-2v0c0-1.105-0.895-2-2-2h0c-1.105,0-2,0.895-2,2v0C18,6.105,18.895,7,20,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M18,21h3v-4 l2,0v-5c0-1.105-0.895-2-2-2h-1"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
                    fill="none"
                    stroke="currentColor"
                  />
                  <path
                    d="M15,23H9v-6H7v-5 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
                    fill="none"
                    stroke="currentColor"
                  />
                </svg>
              </div>
            </div>
            <div>
              <p className="mb-2 font-bold tracking-wide">Recommendations</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <p className="font-medium text-gray-800">Limit value: {getLimit(friendWallet)}</p>
                </li>
                <li className="flex items-center">
                  <p className="font-medium text-gray-800">
                    Borrow period: {getPeriod(friendWallet)}
                  </p>
                </li>
                <li className="flex items-center">
                  <p className="font-medium text-gray-800">Rewards:{getRewards(friendWallet)} </p>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a
              href="/"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gradient-to-r from-indigo-700 to-indigo-900 hover:bg-white rounded-xl focus:shadow-outline focus:outline-none"
            >
              Borrow
            </a>

          </div>
        </div>
      </div>
    </div>


    </div> 
};
  if (isDisconnected) {return (
    <div>
    <div className='items-center h-100 bg-gradient-to-r from-indigo-700 to-indigo-900 p-20'>
      <h1 className='text-white text-6xl text-center font-bold my-10'>Borrow stablecoins to your pals</h1>
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
          <svg className="mt-1 flex-shrink-0 w-5 h-5 text-gray-800 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11.739,13.962c-0.087,0.086-0.199,0.131-0.312,0.131c-0.112,0-0.226-0.045-0.312-0.131l-3.738-3.736c-0.173-0.173-0.173-0.454,0-0.626l3.559-3.562c0.173-0.175,0.454-0.173,0.626,0c0.173,0.172,0.173,0.451,0,0.624l-3.248,3.25l3.425,3.426C11.911,13.511,11.911,13.789,11.739,13.962 M18.406,10c0,4.644-3.763,8.406-8.406,8.406S1.594,14.644,1.594,10S5.356,1.594,10,1.594S18.406,5.356,18.406,10 M17.521,10c0-4.148-3.373-7.521-7.521-7.521c-4.148,0-7.521,3.374-7.521,7.521c0,4.148,3.374,7.521,7.521,7.521C14.147,17.521,17.521,14.148,17.521,10"></path></svg>

          <div className="grow ms-5">
            <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
              Get recommendations for your borrow
            </h3>
            <p className="text-sm text-gray-500">
              Get insights on periods, value limits and more
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
