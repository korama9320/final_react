import img from "../../images/cover.jpg";
import img1 from "../../images/profile.webp";
import { useSelector } from "react-redux";
import hamdy from "./profile.module.css";
function ProfileTop() {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <>
      <section>
        {/* <img src={img} alt="" className={hamdy.coverImage} /> */}
        <img src={img1} alt="" className={hamdy.profileImage} />
        <h1 className={hamdy.profileName}>{user.username}</h1>
      </section>
    </>
  );
}

export default ProfileTop;
