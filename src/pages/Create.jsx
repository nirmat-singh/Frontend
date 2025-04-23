import React, { useState } from "react";
import Typography from "@mui/material/Typography"
import { Button, ButtonGroup, Container, TextField } from "@mui/material";
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useNavigate } from "react-router";


export default function Create(){
    const [title,setTitle] = useState("");
    const [details,setDetails] = useState("");
    const [tit,setTit] = useState("");
    const [det,setDet] = useState("");
    const [category,setCategory] = useState();
    const [notes,setNotes] = useState();


    const handle = (e)=>{
        e.preventDefault();
        setTit("");
        setDet("");
        if(title=="") setTit("Enter title")
        if(details=="") setDet("Enter details")
        if(title && details ){
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({ title, details, category })
            }).then(() => history.push('/'))
        }
    }

    return(
        <Container className="pt-2" >
            <Typography
              variant="h5"
              className="text-gray-500 "
            >
                Create a New Note
            </Typography>

            <form noValidate className="mt-2" onSubmit={handle}>
                <TextField
                sx={{ marginBottom:1 }}
                required
                value={title}
                onChange={(e)=>{
                    setTitle(e.target.value)
                }}
                label="Note Tile"
                color="secondary"
                variant="outlined"
                error={Boolean(tit)}
                helperText={tit}
                fullWidth
                />
                <TextField
                sx={{ marginBottom:1}}
                required
                value={details}
                onChange={(e)=>{
                    setDetails(e.target.value)
                }}
                label="Details"
                color="secondary"
                variant="outlined"
                error={Boolean(det)}
                helperText={det}
                fullWidth
                multiline
                rows={5}
                />
                <Button type="submit" className="p-2" variant="contained" >
                Submit
                </Button>
            </form>


            <FormControl >
                <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
                    <FormControlLabel  value="money" control={<Radio color="secondary" />} label="Money" />
                    <FormControlLabel value="todos" control={<Radio />} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio />} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio />} label="Work" />
                </RadioGroup>
            </FormControl>


        </Container>
    )
}