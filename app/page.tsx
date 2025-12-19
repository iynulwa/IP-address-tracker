import IpInfo from "./ui/ip-info";
import Search from "./ui/search";

export default function Home() {
  return (
    <div>
      <main>
        <h1>IP Tracker</h1>
        <Search />
        <IpInfo />
      </main>
    </div>
  );
}
