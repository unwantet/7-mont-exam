import { Link, useParams } from "react-router-dom"
import AdProducts from "../components/AdProducts";
import Features from "../components/Features";
import ImageContainer from "../components/ImageContainer";
import LikeProducts from "../components/LikeProducts";
import SingleContainer from "../components/SingleContainer";
import { useFetch } from "../hooks/useFetch";


export default function SingleProduct() {
    const { id } = useParams()
    const { data } = useFetch(`http://localhost:3000/products?id=${id}`);
    
    
    return (
        <div className="align-content pt-20">
            <Link to='/' className="mb-14 cursor-pointer"> Go Back</Link>
        {data && data.length > 0 ? (
            <div>
            <SingleContainer product={data[0]}/>
            <Features  product={data[0]}/>
            <ImageContainer product={data[0]}/>
            <LikeProducts product={data[0].others}/>
            <AdProducts/>
            </div>
        ) : (
            <p>No data available</p>
        )}
    </div>
    )
}
