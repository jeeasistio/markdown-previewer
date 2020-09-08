import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, TextField, Typography, Box } from '@material-ui';
import parse from 'html-react-parser';

const App = () => {
  
  const [inputText, setInputText] = useState('');
  
  return (
    <CssBaseline>
      <Typography align="center" component="h1" variant="h4">Markdown Previewer</Typography>
      <Box m={2}>
        <TextField
          multiline 
          rows={8}
          fullWidth
          margin="normal"
          variant="outlined"
          label="Enter markdown here"
          onChange={(e) => setInputText(e.target.value)}
         />
        <Typography paragraph align="center" variant="h6">{inputText && 'Preview'}</Typography>
        <Box>
          {parse(marked(inputText))}
        </Box>
      </Box>
    </CssBaseline>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);