import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/itemCount";
import "../node_modules/bulma/css/bulma.css"

function App(){
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a Capyart!!!"}/>
            <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregada ", quantity)}/>
        </div>
    )
}

export default App;