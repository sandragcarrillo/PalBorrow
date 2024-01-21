# PalBorrow

If we have learned somehting in Blockchain, specially in critp is that you shouldn't trust, verify. 

Even when you are borrowing money to a pal, you should verify if it's risky to do it, and thankfully, we have GHO data to discover it, and keep your friendship healthty.


## Description

PalBorrow is a dApp for borrows between pals, that promotes trust, international transactions in various stablecoins, interest-free. In our platform you can check if your pal is elegible to give them a borrow. Just type their wallet address and see if it would represent a high risk for you, taking in consideration their current and historical data in GHO stablecoin. Additionaly, you will receive recommendations on how long the interest-free loan should be granted to your pal, based specifically on the risk it represents according to their historical balance.



### To run frontend
1. Clone project
2. Create an  ```.env``` file and add your Alchemy ID and Wallet Connect ID so ConnectKit works as it should

Install dependencies

```bash
  npm install
```
Run project

```bash
  npm run dev
```

### Tech stack
1. ConnectKit SDK
2. GHO SDK
3. Ethers.js
4. Tailwind
5. ReactJS

### Next step
We are going to create the history of points earned on Pal Borrow as a functionality that allows measuring reputation within the platform.
