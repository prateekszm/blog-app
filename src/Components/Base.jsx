import NavBar from "./NavBar";

const Base = ({title = "Welcome", children}) => {
    return ( 
        <div >
            <NavBar/>
            {children}
        </div>
        
     );
}
 
export default Base;