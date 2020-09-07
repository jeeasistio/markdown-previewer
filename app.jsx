import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, TextField, Typography, Box } from '@material-ui';
import marked from 'marked';

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
        <Box
          dangerouslySetInnerHTML={{__html: marked(inputText)}}
         />
      </Box>
    </CssBaseline>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);