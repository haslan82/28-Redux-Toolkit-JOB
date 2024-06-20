import React, { useState } from 'react'
import { Button, ButtonGroup, Container, Stack, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import FormModal from '../components/FormModal'
const Crud = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
 <Container>
    <Stack className='align-items-end mt-5 mb-4'>
     <Button onClick={()=> setIsOpen(true)}>Yeni Görev Ekle</Button>
    </Stack>
    <Table variant='dark' responsive striped hover bordered>
        <thead>
           <tr>
                <th>#</th>
                <th>Görev</th>
                <th>Yazan</th>
                <th>Tarih</th>
                <th>İşlemler</th>
           </tr>
        </thead>
        <tbody>
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
        </tbody>
    </Table>
 </Container>
 <FormModal isOpen={isOpen} handleClose={()=>setIsOpen(false)} />
    </div>
  )
}

export default Crud
