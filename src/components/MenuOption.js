const MenuOption = ({ text, icon, link }) => {
    return (
        <div className='option'>
            <div className='content'>
                <span className='material-icons icon'>{icon}</span>
                <span className='text'>{text}</span>
            </div>
        </div>
    )
}

export default MenuOption;
