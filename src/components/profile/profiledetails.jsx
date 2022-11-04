import { useSelector } from "react-redux";
import hamdy from "./profile.module.css";

function ProfileDetails() {
  const user = useSelector((state) => state.userReducer.user);
  const BMR =
    user.gender === "male"
      ? 10 * user.weight + 6.25 * user.height - 5 * user.age + 5
      : user.gender === "female"
      ? 10 * user.weight + 6.25 * user.height - 5 * user.age - 161
      : 1200;
  return (
    <>
      <div className={hamdy.profileDetails}>
        <div>
          <p>
            <span>Age </span>
            <br />
            {user.age}
          </p>
          <p>
            <span>Gender </span> <br />
            {user.gender}
          </p>
          <p>
            <span>Weight </span> <br />
            {user.weight} kg
          </p>
          <p>
            <span>Height </span> <br />
            {user.height} cm
          </p>
          <p>
            <span>Fat </span> <br />
            {user.fat} %
          </p>
        </div>
        <div>
          <p>
            <span>BMI </span> <br />
            {(user.weight / Math.pow(user.height / 100, 2)).toFixed(2)}
          </p>
          <p>
            <span>BMR </span> <br />
            {BMR}
          </p>
          <p>
            <span>Protein </span> <br />
            {Math.ceil(user.weight * 1.2)}-{Math.ceil(user.weight * 2)} grm
          </p>
          <p>
            <span>Healthy weight range </span> <br />
            {(19 * Math.pow(user.height / 100, 2)).toFixed(2)}-
            {(25 * Math.pow(user.height / 100, 2)).toFixed(2)} kg
          </p>
          <p>
            <span>Low activity </span> <br />
            {BMR * 1.2} cal
          </p>
          <p>
            <span>Light exercise </span> <br />
            {BMR * 1.375} cal
          </p>
          <p>
            <span>Moderate exercise </span> <br />
            {BMR * 1.55} cal
          </p>
          <p>
            <span>Active individuals </span> <br />
            {BMR * 1.725} cal
          </p>
          <p>
            <span>Extremly active </span> <br />
            {BMR * 1.9} cal
          </p>
        </div>
      </div>
    </>
  );
}

export default ProfileDetails;
