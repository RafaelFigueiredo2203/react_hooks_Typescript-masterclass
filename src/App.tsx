import React , {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef, //referencia para algum elemento da DOM
  useContext,
  useReducer,
}from 'react';

interface User{
  name:string;
  login:string;
  avatar_url:string;
}

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [users, setUsers]  = useState<[User]>();

  const names = useMemo(() => users?.map(user => user.name).join(',') || '', [users]);
  const greeting = useCallback(
    (user: User) => alert(`Hello  ${user.name}`),[]
  )
  
inputRef.current?.focus();

  return (
    <div >
     <form action="">
       <input type="text" ref={inputRef} />
     </form>
    </div>
  );
}

export default App;
