import "../Css/User.css";
import DesktopUser from "../components/User/DesktopUser";
import MobileUser from "../components/User/MobileUser";

const User = () => {
  return (
    <div className="User">
      <DesktopUser />
      <MobileUser />
    </div>
  );
};

export default User;
