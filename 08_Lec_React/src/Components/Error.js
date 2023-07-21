import {useRouteError} from "react-router-dom"

const Error=()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div id="ErrorPage">
            <h1>Error</h1>
            <h1>Opps!!!!!!!</h1>
            <h2>{err.status + " : " + err.statusText}</h2>
        </div>
    );
}
export default Error;