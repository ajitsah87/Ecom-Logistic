import { ProductType } from "@/interfaces/types"
import { useGetAllProductsQuery } from "../redux/services/productsApi"
import ProductCard from "./ProductCard"


const Products = () => {

    const {data, isLoading, error} = useGetAllProductsQuery(null)

    if(isLoading) return <div className="text-center">Loading..</div>
    if(error) return <pre className="text-center">{JSON.stringify(error)}</pre>

  return (
    <div className="flex gap-8 justify-center flex-wrap w-[min(1300px,100%-2rem)] mx-auto">
        {data && (
            data.map((product: ProductType, index: number) => (
                <ProductCard key={index} id={product.id} product={product}  />
            )))
        }
    </div>
  )
}

export default Products