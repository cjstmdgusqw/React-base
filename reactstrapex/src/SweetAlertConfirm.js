import Swal from 'sweetalert2';
import { Button } from 'bootstrap';

const SweetAlertConfirm = () => {
    const deleteAlert = () => {
        Swal.fire({
            title : '정말 삭제하시겠습니까?',
            icon : 'question',
            showCancelButton : true,
            confirmButtonColor : '#4B088A',
            cancelButtonColor : '#01DF01',
            confirmButton : '예',
            cancelButtonText: '아니요'
        }).then(result=>{
            if(result.value){
                document.getElementById('deleteId').remove();
                Swal.fire(
                    'Deleted', 
                    'sweetalert2 삭제 완료',
                    'success'
                )
            }
        })
    }
    return(
        <>
            <h1 id = 'deleteId'>SweetAlert Confirm</h1>
            <Button color = 'primary' onClick = {deleteAlert}></Button>
        </>
    )
}
export default SweetAlertConfirm;