import "./App.css";
import { Box } from "@mui/material";
import Top from "./components/Top/Top";
import Body from "./components/Body/Body";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Box sx={{ background: "#f5f7fa", width: "full", height: "100vh", p: 2 }}>
      <Top />
      <Body />
      <ToastContainer />
    </Box>
  );
}

export default App;
