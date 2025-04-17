import HeaderBox from "@/components/HeaderBox";
import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import { getLoggedInUser } from "@/lib/actions/user.action";
import Image from "next/image";

export default async function Home() {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />


          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.50}
          />
        </header>
        Recent TRANSACTIONS
      </div>
      <RightSidebar
      user={loggedIn}
      transactions={[]}
      banks={[{currentBalance:123.52},{currentBalance:500.250}]}
      />
    </section>
  );
}
