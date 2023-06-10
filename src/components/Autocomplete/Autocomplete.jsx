import { useContext, useEffect, useState, useRef } from 'react';
import './style.css'
import { AllUsersContext } from '../../Helper/Context';

export default function Autocomplete(prop) {
  const {setMemberList, memberList} = prop
  const {allUsers, setAllUsers} = useContext(AllUsersContext)
  const [searchUser, setSearchUser] = useState('')
  const [filteredUsers, setFilteredUsers] = useState([])
  const [contactChipList, setContactChipList] = useState([])

  useEffect(()=>{
    setFilteredUsers(()=>{
      return allUsers.filter(user=>{
        if(searchUser === ''){
          return
        }
        if(user.uid.toLowerCase().includes(searchUser.toLowerCase())){
          return user
        }
      })
    })
  },[searchUser])

  function handleUserClick(user){
    setMemberList(prev =>{
      if(prev.indexOf(user)===-1){
        return [...prev, user]
      }
      else{
        return [...prev]
      }
    })
  }

  function generateList(){
    return filteredUsers.map(user=>{
      const existingTag = ()=>{
        if(memberList.indexOf(user) != -1){
          return 'active contactList'
        }
        else{
          return 'contactList'
        }
      }
      return <li key={user.id} onClick={()=>handleUserClick(user)} className={existingTag()}>{user.uid}</li>
    })
  }
  
  
  return (
    <div>
      <input type="text" value={searchUser} onChange={(e)=>setSearchUser(e.target.value)}/>
      <div className='list-wrapper'>
        <ul>
          {generateList()}
        </ul>
      </div>
    </div>
  );
}
