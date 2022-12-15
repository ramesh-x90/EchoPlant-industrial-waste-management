// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

function App() {
  const responseGoogle = (res: any = { error: "failed" }) => {
    console.dir(res);
  };

  const login = () => {
    const dw = window.screen.width;
    const dh = window.screen.height;

    const windowWidth = dh / 2;
    const windowHeight = dh / 2;

    const top = (dh - windowHeight) / 2;
    const right = (dw - windowWidth) / 2;

    const loginWindow = window.open(
      "https://accounts.google.com/o/oauth2/auth?redirect_uri=http://localhost/api/auth/google&client_id=963758742959-1eg7o6ikdfif17q6niibmad1drlllkes.apps.googleusercontent.com&access_type=offline&response_type=code&prompt=consent&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
      "Echo-Plant | Google Auth",
      `toolbar=yes,scrollbars=yes,resizable=yes,top=${top},left=${right},width=${windowWidth},height=${windowHeight}`
    );

    const handler = setInterval(() => {
      if (window.localStorage.getItem("loginDone")) {
        clearInterval(handler);
        window.localStorage.removeItem("loginDone");
        setTimeout(() => {
          loginWindow?.close();
        }, 1000 * 20);
      }
    }, 1000);

    setTimeout(() => {
      clearInterval(handler);
      loginWindow?.close();
    }, 60 * 2 * 1000);
  };

  return (
    <div className="App ">
      <button onClick={login}>GOOGLE</button>
      <br />
    </div>
  );
}

export default App;
