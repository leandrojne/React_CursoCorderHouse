import Img404 from "../../assets/404img.png";

export function NotFoundPage()
{
    return (
        <div className='notfount container'>
            <img src={ Img404 } alt="Pagina No Encontrada"/>
        </div>
    )
}
