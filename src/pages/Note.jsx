import { Container, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react'
import NoteCard from './NoteCard';

export default function Note() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [])
  
    const handleDelete = async (id) => {
      await fetch('http://localhost:3000/notes/' + id, {
        method: 'DELETE'
      })
      const newNotes = notes.filter(note => note.id != id)
      setNotes(newNotes)
    }

    return(
        <Container>
            <Grid container spacing={3}  >
              {notes.map((note)=>
                  <Grid item size={4} >
                    <NoteCard id={note.id} note={note} del={handleDelete} />
                  </Grid>
              )}
            </Grid>
        </Container>
    )
}
