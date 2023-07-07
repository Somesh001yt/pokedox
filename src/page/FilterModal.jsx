import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  backgroundColor:'white',
  p: 4,
  borderRadius:'12px',
  outline:'0px'
};

function FilterModal(props) {
  const { filter, setFilter , otherFilter } = props;
  const handleOpen = () => setFilter(true);
  const handleClose = (param) => {
    setFilter(false)      
    otherFilter(param);
  };

  return (
    <div>
      <Modal
        open={filter}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <Fade in={filter}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
            <h1 className='text-xl font-bold my-2'>Choose a Filter</h1>
               <div className='flex flex-col'>
                <h1 className='mb-3 text-xl'>Type</h1>
                <ul className='flex gap-x-8 gap-y-2 justify-between flex-wrap'>
                  <li onClick={() => handleClose('fighting')} className='text-sm cursor-pointer hover:text-blue-500' >Fighting</li>
                  <li onClick={() => handleClose('poison')} className='text-sm cursor-pointer hover:text-blue-500' >Poison</li>
                  <li onClick={() => handleClose('ground')} className='text-sm cursor-pointer hover:text-blue-500' >Ground</li>
                  <li onClick={() => handleClose('rock')} className='text-sm cursor-pointer hover:text-blue-500' >Rock</li>
                  <li onClick={() => handleClose('bug')} className='text-sm cursor-pointer hover:text-blue-500' >Bug</li>
                  <li onClick={() => handleClose('ghost')} className='text-sm cursor-pointer hover:text-blue-500' >Ghost</li>
                  <li onClick={() => handleClose('fire')} className='text-sm cursor-pointer hover:text-blue-500' >Fire</li>
                  <li onClick={() => handleClose('grass')} className='text-sm cursor-pointer hover:text-blue-500' >Grass</li>
                  <li onClick={() => handleClose('water')} className='text-sm cursor-pointer hover:text-blue-500' >Water</li>
                  <li onClick={() => handleClose('steel')} className='text-sm cursor-pointer hover:text-blue-500' >Steel</li>
                </ul>
               </div>
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            <ul>
            </ul>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default FilterModal