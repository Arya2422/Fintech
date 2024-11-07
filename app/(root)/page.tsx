import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

const Home = ({user}) => {
  const loggedIn={firstName:'ABC',email:'abc@gmail.com'};
  
  

  return (
    <section className='home'>
     <div className='home-content'>
      <header className='home-header'>
      <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
  <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1455}
          />
      </header>
        RECENT TRANSACTIONS, <b>TODAY</b>
     </div>
     <RightSidebar 
      user={loggedIn}
      transactions={[]} 
      banks={[{currentBalance:1455.00}, 
              {currentBalance:1455.00}]
     }/>
     </section>
  )
}

export default Home
