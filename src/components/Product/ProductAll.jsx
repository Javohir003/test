import { Link } from "react-router-dom";
import { UserFetch } from "../../hook/UserFetch";

function ProductAll() {
  const { data: product } = UserFetch("https://fvnfzhsmooudxwftabmv.supabase.co/storage/v1/object/sign/Data/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJEYXRhL2RiLmpzb24iLCJpYXQiOjE3NDAyMjAzODIsImV4cCI6MTc3MTc1NjM4Mn0.Zj9xbUP1vH_PjheyEpUETsd15YhZchXvR0Xj9k11DiM");
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
