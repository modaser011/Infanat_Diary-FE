// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';
// import { vacBabyContext } from './data/vacBabydata';
// import { useContext } from 'react';
// function DeleteConf() {
//   const data1 = useContext(vacBabyContext);
//   const confirm=()=>
//   {
//     data1.setDeleteConfirm(true)
//     data1.setDeleteApear1(false)
//   }
//   return (
//     <>
//       <Modal show={data1.deleteAppear} onHide={()=>data1.setDeleteApear1(false)} className='d-flex align-self-center ' style={{marginTop:'10rem'}}>
//         <Modal.Body>
//           <h5 className='text-start'>If you delete this item, you will not be able to restore it again</h5>
//           <hr/>
//           <div className='d-flex justify-content-end'>
//           <Button onClick={()=>data1.setDeleteApear1(false)} variant="secondary">
//             Close
//           </Button>
//           <Button onClick={confirm}variant="danger" className='ms-3'>
//             Remove
//           </Button>
//           </div>
//           </Modal.Body>
//       </Modal>
//     </>
//   );
// }

// export default DeleteConf;