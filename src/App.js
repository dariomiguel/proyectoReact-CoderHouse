import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "../node_modules/bulma/css/bulma.css"

function App(){
    return (
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={"Bienvenido a Capyart!!!"}/>
            <ItemDetailContainer/>
        </div>
    )
}

export default App;