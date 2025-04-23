import React from 'react'
import { Card, CardHeader , CardContent , IconButton, Typography} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export default function NoteCard({note , del }) {
  return (
    <Card>
      <CardHeader
        title={note.title}
        subheader={note.category}
        action={
          <IconButton onClick={()=>del(note.id)}>
            <DeleteIcon/>
          </IconButton>
        }
      />
      <CardContent>
        <Typography>
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  )
}

