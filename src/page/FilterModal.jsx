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
  backgroundColor: 'white',
  p: 4,
  borderRadius: '12px',
  outline: '0px'
};

function FilterModal(props) {
  const { filter, setFilter, data } = props; // Assuming `data` contains the data you mentioned

  const handleOpen = () => setFilter(true);
  const handleClose = () => setFilter(false);

  // Extracting the types from the data
  // const types = data.types.map(type => type.type.name);

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
              Choose a Filter
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              {/* <ul>
                {types.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul> */}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default FilterModal;
