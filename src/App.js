import { Typography } from "@mui/material";
// import Shortern from "./pages/Shortern.jsx";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <div>
      <Typography
      variant="h3"
      component="h3"
      sx={{
        fontSize: '2rem',
        fontFamily: 'sans-serif',
        textAlign: 'center',
        marginBottom: '50px'
      }}
      >URL Shorterner Application
      </Typography>
      <Analytics />
    </div>
  );
}

export default App;
