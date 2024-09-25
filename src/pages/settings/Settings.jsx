import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
          <label>ProfilePicture</label>
          <div className="settingsPP">
            <img
              src="https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Igor"/>
          <label>Email</label>
          <input type="email" placeholder="igor@gmail.com"/>
          <label>Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Submit</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  );
}