import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import './ProfileCard.css';
import { Link } from "react-router-dom";
import { API,graphqlOperation } from 'aws-amplify';
import {getUsers, listUsers} from './graphql/queries';
import { useState, useEffect } from 'react';

var curr_user;

async function fetchUser() {

  const userMap = new Map();
  let curr_user = '';
  try {
    //const allUsers = await API.graphql({ query: queries.listUsers });
    //console.log(allUsers); // result: { "data": { "listTodos": { "items": [/* ..... */] } } }

    //Fetch a single record by its identifier
    // const oneUser = await API.graphql({
    // query: queries.getUserByUsername,
    // //variables: { id: '5c5c43e1-032a-473c-a425-d61141094381' }
    // variables: { username: "manasaling" }
    // });

    const allUsers = await API.graphql ({
      query : listUsers
    });

   
    allUsers.data.listUsers.items.forEach(user => {
     // console.log(user.id, user.name);
     const userData = {
      name: user.name,
      university: user.university,
      skills: user.skills,
      interests: user.interests
  
      // add other relevant attributes here
    };
    
    userMap.set(user.id, userData);
    });

    // const oneUser = await API.graphql({
    //   query: getUsers,
    //   variables: { id: '5c5c43e1-032a-473c-a425-d61141094381' }
    //   //variables: { username: 'pranatidani' },
    //   // debug: true
    //   });

    // console.log(oneUser);
    // curr_user = (oneUser.data.getUsers.name);
    // //console.log(curr_user);

  }
   catch (err) {
      console.log("error fetching user: ", err);
  }

  return userMap;
}

export default function ProfileCard(props) {

  const { myObject } = props;

  //console.log(myObject);

  // const [all_user, setCurrUser] = useState([]);


  // useEffect(() => {
  //   async function fetchData() {
  //     const user = await fetchUser();
  //     setCurrUser(user);
  //   }
  //   fetchData();
  // }, []);
  // fetchUser();

  // console.log(all_user);
  // Simple query
  // Simple query

  // var curr_name = await fetchUser();

  // fetchUser().then(x=> {
  //   curr_name = x;
  //   return curr_name;
  // });

  // console.log(curr_name);
  
  // (async () => {
  //   curr_name = await fetchUser();
  //   console.log(curr_name);
  // })()
  // // const curr_name = fetchUser();
  // console.log(curr_name);

  // return (
  //   <section>
  //      {[...all_user.entries()].map(([userId, userData]) => {
  //       <div key={userData.id} className="card">
  //         <div className="titlePic">
  //           <h1>{userData.name}</h1>
  //           <MDBCardImage
  //             style={{ width: '180px', borderRadius: '10px' }}
  //             src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
  //             alt='Generic placeholder image'
  //             fluid />
  //         </div>
  //         <p className="title">{userData.university}</p>
  //         {/* <p>Skills: {(userData.skills).join(', ')}</p> */}
  //         <p>Interests: Environment, Healthcare</p>
  //         <p><button><Link to='/profile'>More Info</Link></button></p>
  //       </div>
  //     })}
  //   </section>
  // );


  return (

    <section>
      <div class="card">
        <div class = "titlePic">
        <h1>{myObject.name}</h1>
        <MDBCardImage
              style={{ width: '180px', borderRadius: '10px' }}
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
              alt='Generic placeholder image'
              fluid />
        </div>
        <p class="title">{myObject.university}</p>
        <p>Skills: {(myObject.skills).join(', ')}</p>
        <p>Interests: {(myObject.interests).join(', ')}</p>
        
        <p><button><Link to='/profile'>More Info</Link></button></p>
        
        </div>
    </section>
  );
}