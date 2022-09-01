import { Link } from 'react-router-dom';
function Test()
{
    return(
        <div>
            Test
            <div><Link to={"/about"}>About</Link></div>
      <div><Link to={"/"}>home</Link></div>

        </div>
    );
}
export default Test;