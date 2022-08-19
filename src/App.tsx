import Canvas from "./components/Canvas"
import styled from "styled-components"

const Box = styled.div`
  max-width: 1200px;
  min-height: 600px;
  margin: 6rem auto;
  border: 1px solid green;
`
function App() {
  return (
    <Box>
      <Canvas />
    </Box>
  )
}

export default App
