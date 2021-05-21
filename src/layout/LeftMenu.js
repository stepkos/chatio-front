import MenuOption from './../components/MenuOption';

const LeftMenu = () => {
    return (
        <div id="left-menu">

            <h1 id='logo'>Chatio</h1>

            <div id="menu">

                <MenuOption 
                    text='Home'
                    icon='home'
                    link='#' 
                />

                <MenuOption 
                    text='Chat'
                    icon='chat'
                    link='#' 
                />

                <MenuOption 
                    text='Settings'
                    icon='settings_suggest'
                    link='#' 
                />

                <MenuOption 
                    text='About'
                    icon='alternate_email'
                    link='#' 
                />

            </div>

        </div>
    );
}

export default LeftMenu;