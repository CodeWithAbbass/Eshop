import { useEffect } from "react";
import { Link } from "react-router-dom";

const Countdown = ({ Expire }) => {
  let SetTimeOutID;
  const EndingDate = Expire ? Expire : "Jun 28, 2023 09:00:00";

  const Coundown = () => {
    SetTimeOutID = setTimeout(() => {
      // Set the date we're counting down to
      let countDownDate = new Date(EndingDate).getTime();
      // Get today's date and time
      let now = new Date().getTime();

      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      if (distance < 0) {
        clearTimeout(SetTimeOutID);
        const HSC_Heading = document.querySelector(".HSC_CC_Heading");
        HSC_Heading.innerHTML = "EXPIRED";
        HSC_Heading.style.color = "#f85606";
        return;
      }
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.querySelector(".Count_days").innerHTML = days;
      document.querySelector(".Count_hours").innerHTML = hours;
      document.querySelector(".Count_minutes").innerHTML = minutes;
      document.querySelector(".Count_seconds").innerHTML = seconds;

      // If the count down is finished, write some text

      Coundown();
    }, 1000);
  };
  useEffect(() => {
    Coundown();
    return () => {
      clearTimeout(SetTimeOutID);
    };
  }, []);
  return (
    <div className="HSC_Counter_Container">
      <div className="HSC_Counter_Heading ms-3 d-inline-block">On Sale Now</div>
      <div className="HSC_Counter_Content d-inline-block">
        <span className="HSC_CC_Heading me-2">Ending in</span>
        <div className="HSC_CC_Count_Item_Container d-inline-block">
          <span className="HSC_CC_Count_Item Count_days ">{0}</span>
          <span className="HSC_CC_Count_Colon">:</span>
          <span className="HSC_CC_Count_Item Count_hours ">{0}</span>
          <span className="HSC_CC_Count_Colon">:</span>
          <span className="HSC_CC_Count_Item Count_minutes">{0}</span>
          <span className="HSC_CC_Count_Colon">:</span>
          <span className="HSC_CC_Count_Item Count_seconds">{0}</span>
        </div>
      </div>
      <Link className="HSC_ShopNow_Link text-center d-block bg-transparent">
        Shop Now
      </Link>
    </div>
  );
};

export default Countdown;
