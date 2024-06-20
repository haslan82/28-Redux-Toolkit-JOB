import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Stack, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import FormModal from '../components/FormModal'
import crudReducer from "./../redux/slices/crudSlice";
import counterReducer from "./../redux/slices/counterSlice";


const Crud = () => {
    const [isOpen, setIsOpen] = useState(false);

const [editItem, setEditItem] = useState(null);
 const {isDarkTheme} = useSelector((store)=> store.counterReducer);
//!console.log(theme);

const {tasks} = useSelector((store=>store.crudReducer));
//!console.log(tasks);

  return (
    <div className='vh-100'>
 <Container>
    <Stack className='align-items-end mt-5 mb-4'>
     <Button onClick={()=> setIsOpen(true)}>Yeni Görev Ekle</Button>
    </Stack>
    <Table variant= {isDarkTheme ? "dark" : "light"} responsive striped hover bordered>
        <thead>
           <tr>
                <th>#</th>
                <th>Görev</th>
                <th>Yazan</th>
                <th>Atanan</th>
                <th>Tarih</th>
                <th>İşlemler</th>
           </tr>
        </thead>
        <tbody>

          {/*   <tr>
                <td>1</td>
                <td>title</td>
                <td>author</td>
                <td>assigned</td>
                <td>date</td>
                <td>
                    <ButtonGroup size='sm'>
                        <Button>Düzenle</Button>
                        <Button variant='danger'>Sil</Button>
                    </ButtonGroup>
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>title</td>
                <td>author</td>
                <td>assigned</td>
                <td>date</td>
                <td>
                    <ButtonGroup size='sm'>
                        <Button>Düzenle</Button>
                        <Button variant='danger'>Sil</Button>
                    </ButtonGroup>
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>title</td>
                <td>author</td>
                <td>assigned</td>
                <td>date</td>
                <td>
                    <ButtonGroup size='sm'>
                        <Button>Düzenle</Button>
                        <Button variant='danger'>Sil</Button>
                    </ButtonGroup>
                </td>
            </tr>

            <tr>
                <td>1</td>
                <td>title</td>
                <td>author</td>
                <td>assigned</td>
                <td>date</td>
                <td>
                    <ButtonGroup size='sm'>
                        <Button>Düzenle</Button>
                        <Button variant='danger'>Sil</Button>
                    </ButtonGroup>
                </td>
            </tr> */}


            {
tasks.map((task, i)=> (
    <tr key={i}>
                <td>{i} </td>
                <td>{task.title}</td>
                <td>{task.author}</td>
                <td>{task.assigned_to}</td>
                <td>{task.end_date}</td>
                <td>
                    <ButtonGroup size='sm'>
                        <Button onClick={()=>{
                            setEditItem(task);
                        } }>Düzenle</Button>
                        <Button variant='danger'>Sil</Button>
                    </ButtonGroup>
                </td>
            </tr>
))
            }
        </tbody>
    </Table>
 </Container>
 <FormModal editItem={editItem} isOpen={isOpen} handleClose={()=>setIsOpen(false)} />
    </div>
  )
}

export default Crud
