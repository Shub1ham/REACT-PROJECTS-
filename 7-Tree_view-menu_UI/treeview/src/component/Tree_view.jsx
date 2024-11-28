import Menu_list from "./menu-list";

function Treeview({menus=[]}){
    return(
        <div className="container">
            <Menu_list list={menus}></Menu_list>
        </div>
    )
}

export default Treeview;