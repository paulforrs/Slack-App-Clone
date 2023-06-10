import { useRef } from 'react'
import './style.css'
export default function ContactChip(prop) {
    const {title, setMemberList, user_ids, userId} = prop
    const handleCloseBtn = (e)=>{
        console.log(user_ids)
        console.log(userId)
        console.log(e.target.id)
        const index = user_ids.indexOf(Number(e.target.id))
        console.log(index)
        setMemberList(prev=>{
            prev.splice(index, 1)
            return [...prev]
        })
    }
    return (
        <div className="chip">
            <span className="material-symbols-outlined">
                account_circle
            </span>
            {title}
            <span className="closebtn" onClick={handleCloseBtn} id={userId}>&times;</span>
        </div>
    )
}
