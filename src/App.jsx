import { useContext, useEffect, useState } from "react";
import "./App.css";
import Routing from "./Pages/Routing/Routing";
import { Type } from "./util/Action.type";
import { auth } from "./util/Firebase";
import { DataContext } from "./Components/DataProvider/DataProvider";
function App() {
  const [user, dispatch] = useContext(DataContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
    return () => unsubscribe();
  }, [dispatch]);
  return (
    <>
      <Routing></Routing>
    </>
  );
}

export default App;
/* useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({ type: Type.SET_USER, user: authUser });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [dispatch]); // Add dispatch to the dependency array
 */
