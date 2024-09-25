import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img className="writeImage"
           src="https://plus.unsplash.com/premium_photo-1661645390948-1c9d4524ef76?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt=""/>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display: "none"}}/>
          <input type="text" placeholder="Title..." className="writeInput" autoFocus={true}/>
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText" placeholder="Tell your story..."></textarea>
        </div>
        <button type="submit" className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
