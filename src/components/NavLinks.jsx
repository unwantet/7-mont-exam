import { useNavigate } from "react-router-dom"
import '../style/topography.css'

const links = [

    {
        id: 1,
        text: 'HOME',
        link: '/'
    },
    {
        id: 2,
        text: 'HEADPHONES',
        link: '/headphones'
    },
    {
        id: 3,
        text: 'SPEAKERS',
        link: '/speakers'
    },
    {
        id: 4,
        text: 'EARPHONES',
        link: '/earphones'
    }
]

function NavLinks() {
    const navigate = useNavigate();

    const clickNavigate = (link) => {
        navigate(link);
    }

     return(

         <>
     {links.map((link) => {
         return (
            
             <p key={link.id} onClick={()=>clickNavigate(link.link)} className='font-custom navlinks text-white cursor-pointer hover:opacity-60'>
                {link.text}
            </p>           

            )
        })}
     </>
    )

}
export default NavLinks;

