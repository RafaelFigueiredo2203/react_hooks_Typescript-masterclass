import React, {useContext} from 'react';
import CartContext from './CartContext';


function AppContext(){
    const {products} = useContext(CartContext);
    
    return(
        <div>
            
        </div>
    );
}

export default AppContext;