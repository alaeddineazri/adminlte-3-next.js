import InfoBox from "./components/InfoBox/InfoBox";
import SmallBox from "./components/smallBox/SmallBox";
import ChatBox from "./components/chatBox/ChatBox";
import DoughnutBox from "./components/Doughnut/DoughnutBox";
import LineChart from "./components/LineChart/LineChart";


export default function Home() {
  return (
    <>
      <div className="container">
        <div className="row gx-2 ">
          <div className="col-lg-4 col-md-12">
            <InfoBox />
          </div>

          <div className="col-lg-4 col-md-6">
            <InfoBox />
          </div>

          <div className="col-lg-4 col-md-6">
            <SmallBox />
          </div>
        </div>
      </div>
      <div className="container">
  <div className="row ">
    <div className="col-md-6"> <DoughnutBox /></div>
    <div className="col-md-6"><LineChart  /></div>
  </div>
</div>



      <div className="row py-5">
        <div className="col-md-6 mx-5">
        <ChatBox />
        </div>
        <div className="col-md-4">
        <SmallBox />
        </div>
      </div>
    </>
  );
}

