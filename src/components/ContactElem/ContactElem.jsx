import PropTypes from "prop-types";
import style from "./ContactElem.module.scss";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const ContactElem = ({ id, name, number, delCont }) => {
    return <ul className={style.ulElem}>
    <li className={style.liElem} >
                            <p>Name : {name}</p>
                    <p>Telephone Number : {number}</p>
                    <Stack spacing={2} direction="row">
                        <Button variant="outlined" style={{ color:"#f0ffff", borderColor:"#f0ffff" }} onClick={()=>delCont(id)}>
                        Delete 
                    </Button>
                    </Stack>        
                </li>
    </ul>

}

ContactElem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number:PropTypes.string.isRequired,
    delCont:PropTypes.func.isRequired
}