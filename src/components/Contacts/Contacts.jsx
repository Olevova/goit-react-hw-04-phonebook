import PropTypes from "prop-types";
import { ContactElem } from '../ContactElem/ContactElem';


export const Contacts = ({ props, delCont }) => {
        return props.map(({id, name, number}) =>
            <ContactElem key={id}
                id={id}
                name={name}
                number={number}
                delCont={delCont}            
            />
            )}
            
Contacts.propTypes = {
    props: PropTypes.array.isRequired,
    delCont:PropTypes.func.isRequired
}