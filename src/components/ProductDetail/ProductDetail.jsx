import { useParams, useNavigate } from "react-router-dom"
import { UserFetch } from "../../hook/UserFetch";


function ProductDetail() {
    const params = useParams();
    const navigate = useNavigate()
    const paramsID = params.id
    const {data: product} = UserFetch("https://fvnfzhsmooudxwftabmv.supabase.co/storage/v1/object/sign/Data/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEYXRhL2RiLmpzb24iLCJpYXQiOjE3NDAyMjEyNDgsImV4cCI6MTc3MTc1NzI0OH0.YEqn4NEzipCQdYe_betYioQO2P35y4HuXlpp993xssE");
    
    const productDetailID = product?.products.find((product)=> product.id === parseInt(paramsID))
    

    if(!productDetailID){
        return <h1>Loading ...</h1>
    }

    
    

    const handleBackProduct = () => {
        navigate("/about", {replace: true})
    }
    
    
  return (
    <>
        <button onClick={handleBackProduct} className=" py-2 px-2 border rounded-md">Back</button>
        <div className="flex justify-between gap-32">

            <img width={600} src={productDetailID.image} alt="" />
            <article>
                <h1>{productDetailID.title}</h1>
                <h3>{productDetailID.price}</h3>
                <p>{productDetailID.description}</p>
                <button className=" py-2 px-2 border rounded-md">Buy</button>
            </article>
        </div>
        {/* <div>ProductDetail {paramsID}
        </div> */}
    </>
  )
}

export default ProductDetail