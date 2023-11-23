import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useState } from 'react'
import PatrikaImage from '../assets/patrika.jpeg'

const EPatrikaPage = () => {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div className='container mx-auto' >
      {/* div  for image and E-Patrika */}
      <div className='w-full py-6 flex gap-9 justify-center items-center' >
        <div className='w-[50%] flex items-center justify-center ' >
          <img src={PatrikaImage} alt=""/>
        </div>
        
        <div className=' w-[50%] flex flex-col gap-4 justify-center' >
          <h1 className='font-bold text-3xl text-cyan-700 ' >E-Patrika</h1>
        </div>

      </div>

      <div className='py-6 flex gap-9 justify-center items-center bg-blue-200 mb-8 rounded' >
        <h3>Please contribute your Story,experience, poem or writing for publication in the patrika.</h3>
      </div>

      <div className='my-0 mx-auto w-full' >
      <div className='grid gap-3 grid-cols-4' >
          <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Write a story
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='mx-auto '
              >
                <DialogTitle id="alert-dialog-title">
                    Form For E-Patrika
                </DialogTitle>
                <DialogContent>
                    <form className='flex flex-col gap-4 w-[400px]' >
                      <input className='w-full border px-2 py-2 ' type="text" name="authorname" placeholder='Author Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="storyname" placeholder='Story Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="description" placeholder='Description' />
                      <input type="file" name="file" placeholder='Picture' />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button  onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                      Submit
                    </Button>
                </DialogActions>
              </Dialog>
          </div>
          <div>
              <Button variant="outlined" onClick={handleClickOpen} >
                Write a poem
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='mx-auto '
              >
                <DialogTitle id="alert-dialog-title">
                    Form For E-Patrika
                </DialogTitle>
                <DialogContent>
                    <form className='flex flex-col gap-4 w-[400px]' >
                      <input className='w-full border px-2 py-2 ' type="text" name="authorname" placeholder='Author Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="storyname" placeholder='Story Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="description" placeholder='Description' />
                      <input type="file" name="file" placeholder='Picture' />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                      Submit
                    </Button>
                </DialogActions>
              </Dialog>
          </div>
          
          <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Write your Experience
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='mx-auto '
              >
                <DialogTitle id="alert-dialog-title">
                    Form For E-Patrika
                </DialogTitle>
                <DialogContent>
                    <form className='flex flex-col gap-4 w-[400px]' >
                      <input className='w-full border px-2 py-2 ' type="text" name="authorname" placeholder='Author Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="storyname" placeholder='Story Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="description" placeholder='Description' />
                      <input type="file" name="file" placeholder='Picture' />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                      Submit
                    </Button>
                </DialogActions>
              </Dialog>
          </div>
          <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Writting for publication
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className='mx-auto '
              >
                <DialogTitle id="alert-dialog-title">
                    Form For E-Patrika
                </DialogTitle>
                <DialogContent>
                    <form className='flex flex-col gap-4 w-[400px]' >
                      <input className='w-full border px-2 py-2 ' type="text" name="authorname" placeholder='Author Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="storyname" placeholder='Story Name' />
                      <input className='w-full border px-2 py-2 ' type="text" name="description" placeholder='Description' />
                      <input type="file" name="file" placeholder='Picture' />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose} autoFocus>
                      Submit
                    </Button>
                </DialogActions>
              </Dialog>
          </div>
      </div>
      </div>

    </div>
  )
}

export default EPatrikaPage