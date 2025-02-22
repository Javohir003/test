import { Link } from "react-router-dom";
import { UserFetch } from "../../hook/UserFetch";

function ProductAll() {
  const { data: product } = UserFetch("../../../db.json");
  let prod = product?.products;



  
  
  



  return (
    <div>
      <h1 className="mb-20 text-6xl font-black">Productlar</h1>
      <div className="grid gap-5 grid-cols-4">
        {prod &&
          prod.map((item, id) => (
            <div key={id}>
                <article className="flex flex-col gap-5 rounded-lg border">
                    {item?.images.map((imgs, id)=> (
                        <img key={id} className="w-full" src={imgs?.cardImg} alt="" />
                    ))}
                </article>
              <h1>{item.title}</h1>
              <h5>{item.price}</h5>
              <p className="line-clamp-4">{item.description}</p>
              <Link to={`product/${item.id}`}>
                <button className="px-3 py-3 border rounded-lg hover:text-white hover:bg-black transition-all duration-300">
                  Read More
                </button>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductAll;
