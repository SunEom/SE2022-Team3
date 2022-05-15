import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import store from "./store";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(store.getState().user);

  useEffect(() => {
    //로그인 되어있지 않은 사용자 접근 시 로그인페이지로 이동시킴
    if (user == null) {
      navigate("/login", { replace: true });
    }
  }, []);

  return <div className="App">Hello {user?.nickname}</div>;
}

export default App;
