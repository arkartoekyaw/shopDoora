import Navbar from "./navbar";
import Bestdeals from "@/pages/bestdeals";
import Membership from "@/pages/membership";
import NewRelease from "@/pages/newrelease";
import Trynew from "@/pages/trynew";
import Device from "@/pages/device";
import Pod from "@/pages/pod";
import Disposable from "@/pages/disposable";
import Footer from "@/pages/footer";


export default function Home() {
  return (

      <div className="container">
          <Navbar />
          <br/>
          <Bestdeals />
          <br/>
          <Membership />
          <br/>
          <NewRelease/>
          <br/>
          <Trynew/>
          <br/>
          <Device/>
          <br/>
          <Pod/>
          <br/>
          <Disposable/>
          <br/>
          <Footer/>







      </div>
  );
}
