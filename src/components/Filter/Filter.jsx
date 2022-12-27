import PropTypes from "prop-types";
import style from "./Filter.module.scss"


export const Filter = ({filter, func}) => {
    return (<label className={style.filterEl}>
        Find Contacts by name
        <input className={style.inputEl} type="text" value={filter} onChange={func}></input>
    </label>)
}

Filter.propTypes = {
    filter: PropTypes.string,
    func: PropTypes.func.isRequired
}