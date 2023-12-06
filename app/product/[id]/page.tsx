'use client'
import { useGetAllProductsQuery } from "@/app/redux/services/productsApi"
import { useAppSelector } from "@/app/redux/hooks"

const Page = ({params} : {params: {id: string}}) => {
  const productDetails = useAppSelector(store => store.productsApi)
  console.log(productDetails)

  const {data} = useGetAllProductsQuery(null)
  const product = data && data[Number(params.id)]

  return (
    <div className="text-3xl font-semibold">
      {product ? (
        <div>{product.title}</div>
      ) : (
        <div>product not found</div>
      )}
    </div>
  )
}

export default Page
