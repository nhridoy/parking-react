import "./App.css";
import { Box } from "@mui/material";
import Top from "./components/Top/Top";
import Body from "./components/Body/Body";

function App() {
  return (
    <Box sx={{ background: "#f5f7fa", width: "full", height: "100vh", p: 2 }}>
      <Top />
      <Body />
    </Box>
  );
}

export default App;
