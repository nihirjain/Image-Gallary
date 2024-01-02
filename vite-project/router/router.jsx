import {Routes , Route} from 'react-router-dom';
import Section from '../components/Section/section';
import Details from '../components/Pokemondetails/Details';
function Router(){
    return(
        <>
            <Routes>
                <Route path='/' element={<Section/>}/>
                <Route path='/image/:id' element={<Details/>}/>
            </Routes>
        </>
    )
}

export default Router;