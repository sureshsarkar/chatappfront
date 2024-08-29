import React, {useState,useEffect} from 'react'
import axios from 'axios';

const UserList = () => {
const [users,setUsers] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null); 
const allUser = async ()=>{
 try {
    const allusers = await axios.get(`https://chatappbackend-l6tu.onrender.com/api/auth/alluser`, null);
    setUsers(allusers.data)
    console.log(users.data);
  } catch (error) {
    setError(error.message);  // Handle any errors that occur during fetch
  } finally {
    setLoading(false);  // Set loading to false once the request is complete
  }

  }
  useEffect(()=>{
    allUser();
  },[])
  if(loading) return <p>Loading...</p>;  // Display loading state
  if (error) return <p>Error: {error}</p>;  // Display error message if any
  return (
    <>
       <div className="scrollBar">
       
          {users.data.map(user => (
          <div className="d-flex py-2 border-b-2">
              <div className="userImg">
                <img src="../src/assets/images/home.jpg" alt="Logo" />
              </div>
              <div className="p-2 fullNameText">Suresh Sarkar</div>
          </div>
          ))}
      </div>
    </>
  )
}

export default UserList
