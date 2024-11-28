import Menu_item from "./menu-item";

function Menu_list({list=[]}){
    return <ul className="menu-list-container">
         {
            list && list.length ?
            list.map((itemmenu)=><Menu_item item={itemmenu} ></Menu_item>)
            :null
         }
    </ul>
}

export default Menu_list