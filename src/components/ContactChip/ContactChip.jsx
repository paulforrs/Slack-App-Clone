export default function ContactChip(prop) {
    const {title} = prop
    console.log(title)
    const handleCloseBtn = (e)=>{
        e.parentElement.style.display = 'none'
    }
    return (
        <div className="chip">
            <img src="img_avatar.jpg" alt="Person" width="96" height="96"/>
            {title}
            <span className="closebtn" onClick={handleCloseBtn}>&times;</span>
        </div>
    )
}
