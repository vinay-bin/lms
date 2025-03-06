import { toast } from "sonner"

const showCustomToast = (message = '' , type = '' , position = '') => {

    const toastStyle = {
        success : {
            backgroundColor: '#4caf50', // Green for success
            color: 'white',
        } ,
        error : {
            backgroundColor: '#f44336', // Red for error
            color: 'white',
        },
        info : {
            backgroundColor: '#2196f3', // Blue for info
            color: 'white',
        }
    }

  return toast[type](message , {  position: position, autoClose: 3000, style : toastStyle[type] });
}

export default showCustomToast;