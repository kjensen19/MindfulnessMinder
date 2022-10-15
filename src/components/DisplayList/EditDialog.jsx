import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'




// const params = useParams();

//   useEffect(() => {
//     dispatch({
//       type: 'FETCH_STUDENT_TO_EDIT',
//       payload: params.id
//     })
//   }, [params.id])

//   const dispatch = useDispatch();
//   const studentToEdit = useSelector(store => store.studentToEdit)
//   const history = useHistory()

//   const handleConfirm = (e) => {
//     e.preventDefault();
//     // dispatch the updated student object to a saga fn:
//     dispatch({
//       type: 'UPDATE_STUDENT',
//       payload: studentToEdit
//     })
//     history.push('/')
//   }

//   const handleCancel = (e) => {
//     e.preventDefault();
//     history.push('/')
//   }

//   return (
//     <>
//       <h2>Edit Student: {params.id}</h2>
//       <form>
//         <input type="text"
//           value={studentToEdit.githubName || ''}
//           onChange={(e) => dispatch({type: 'EDIT_GITHUB_NAME', payload: e.target.value})}
//         />
//         <input type="text"
//           value={studentToEdit.skillLevel || ''}
//           onChange={(e) => dispatch({type: 'EDIT_SKILL_LEVEL', payload: e.target.value})}
//         />
//         <button onClick={handleConfirm}>Confirm Changes</button>
//         <button onClick={handleCancel}>Cancel</button>
//       </form>
//     </>
//   )
// }

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditDialog({ exercise }) {
  const [open, setOpen] = React.useState(false);
  const [newExercise, setNewExercise] = useState(exercise)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveClose = () => {
    dispatch({
        type: 'UPDATE_EXERCISE',
        payload: newExercise
    })

    setOpen(false)
  }

  const handleDelete = () => {
    dispatch({
        type: 'DELETE_EXERCISE',
        payload: exercise.id
    })
    setOpen(false)
  }

    const handleChange = e => {
      const { name, value } = e.target;
      setNewExercise(newExercise => ({
          ...newExercise,
          [name]: value
      }))};

//   const [newItem, setNewItem] = useState({name:'', quantity:'', units:''})
//   // 
//   const handleSubmit = (event) => {
//       event.preventDefault();
//       addNewItem(newItem)
//   }

//   function emptyInputs() {
//       setNewItem({name:'', quantity:'', units:''})
      
//   }
//   const addNewItem = (item) => {
//       console.log(`newItem in newItem: ${item}`)
//       axios({
//           method: 'POST',
//           url: '/shopping',
//           data: {
//               name: item.name,
//               quantity: item.quantity,
//               units: item.units
//           }
//       }).then((response) => {
//           console.log('this???')
//           fetchItem()
//           emptyInputs()
//       }).catch((error) => {
//           console.log('add item failed', error)
//       })
//   } 
  
//   const handleChange = e => {
//       const { name, value } = e.target;
//       setNewItem(newItem => ({
//           ...newItem,
//           [name]: value
//       }));
//   };


  //Dispatch for PUT(EDIT) and DELETE go here with respective buttons

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={'sm'}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{`Edit ${exercise.Type}?`}</DialogTitle>
        <DialogContent>
          <DialogContentText component='span' id="alert-dialog-slide-description">
            <Box sx={{ minWidth: 120, flexDirection:'row', flexWrap: 'nowrap' }}>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Time:
        </InputLabel>
        <NativeSelect
            onChange={handleChange}
            value={newExercise.Duration}
            name='Duration'
            inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option value={'short'}>10:30AM</option>
          <option value={'noon'}>12:30PM</option>
          <option value={'afternoon'}>2:30PM</option>
          <option value={'EoD'}>4:30PM</option>
        </NativeSelect>
      </FormControl>
      <FormControl >
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Time:
        </InputLabel>
        <NativeSelect
            onChange={handleChange}
            value={newExercise.Type}
            name='Duration'
            inputProps={{
            id: 'uncontrolled-native',
          }}
        >
          <option value={'short'}>10:30AM</option>
          <option value={'noon'}>12:30PM</option>
          <option value={'afternoon'}>2:30PM</option>
          <option value={'EoD'}>4:30PM</option>
        </NativeSelect>
      </FormControl>
    </Box>

          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>DELETE</Button>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default EditDialog
