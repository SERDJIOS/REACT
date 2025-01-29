import { createContext } from 'react';

const UserContext = createContext(null);

function useState (defaultState){
    return [state, setState]
}
function sum (a,b) {
    return a + b;
    
}
const result = sum(5, 10);

function UserContextProvider({ children }) {
    const [isRegister, seIsregister] 
  function loginUser (userData) {
    
    localStorage.setItem('user', JSON.stringify(userData));
    console.log(userData);
    
  }
    return (
     <UserContext.Provider>
        {children}
     </UserContext.Provider>
    )
    
}
export default UserContext;