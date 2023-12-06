import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from 'next/link'
import { ProductType } from "@/interfaces/types";

type PropsType = {
    id: number;
    product: ProductType
}

const ProductCard = ({id, product} : PropsType) => {
  return (
    <div>
      <div className="w-52">
        <Link href={`/product/${id}`}>
            <div className="w-full aspect-square relative bg-zinc-300">
              <Image src={product.image} fill alt="" className="object-contain" />
            </div>
        </Link>
        <div>
          <p className="line-clamp-1">{product.title}</p>
          <div className="flex gap-3 items-center">
            <p className="text-xl font-semibold"><span className="text-green-500">$</span></p>
            <span><FaStar className="inline-block mb-1 text-yellow-400" /> {product.rating.rate} / {product.rating.count}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ProductCard;
