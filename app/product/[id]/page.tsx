"use client";

import { useGetAllProductsQuery } from "@/app/redux/services/productsApi";
import Image from "next/image";
import { MotionButton, MotionDiv, MotionP } from "@/app/MotionElement";
import { LuMoveLeft } from "react-icons/lu";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa6";
import Link from "next/link";
import AnimateComp from "@/app/AnimateComp";

const Page = ({ params }: { params: { id: string } }) => {
  const { data } = useGetAllProductsQuery(null);

  const findProduct = (id: number) => {
    return data?.find((product) => product.id === id);
  };

  const product = findProduct(Number(params.id));


  // animationVariants

  const animationVariants = {
    hidden: {opacity: 0, y: 30},
    show: {opacity: 1, y: 0, transition: {
      staggerChildren: .05
    }}
  }

  const childrenVariants = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0}
  }


  return (
    <AnimateComp>
      {product ? (
        <div className="flex lg:flex-row flex-col overflow-hidden lg:h-screen">
          <div className="flex-1 grid place-content-center p-5">
            <MotionDiv
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="w-96 aspect-square relative"
            >
              <Image
                className="object-contain"
                src={product.image}
                fill
                alt={`product ${product.id}`}
              />
            </MotionDiv>
          </div>
          <MotionDiv variants={animationVariants} initial="hidden" animate="show" className="flex-1 grid place-content-center bg-zinc-200 p-5">
            <div className="w-96 space-y-10">
              <MotionDiv
              className="hidden lg:block"
              variants={childrenVariants} transition={{staggerChildren: 1}}>
                <Link
                  href="/"
                  className="bg-zinc-300 py-2 px-6 rounded-md font-medium w-fit flex gap-2 items-center group"
                >
                  <LuMoveLeft className="group-hover:-translate-x-1 transition-transform" />{" "}
                  back to products
                </Link>
              </MotionDiv>
              <div className="space-y-5">
                <MotionP variants={childrenVariants} className="text-2xl font-bold line-clamp-2">
                  {product.title}
                </MotionP>
                <MotionP variants={childrenVariants} className="line-clamp-4">{product.description}</MotionP>
              </div>
              <MotionDiv variants={childrenVariants} className="flex justify-between items-center">
                <div className="flex text-lg">
                  <button className="w-12 aspect-square rounded-full grid place-content-center bg-zinc-100 group">
                    <FaMinus className="text-xs group-hover:scale-125 transition-transform" />
                  </button>
                  <span className="w-12 aspect-square rounded-full grid place-content-center font-medium">
                    5
                  </span>
                  <button className="w-12 aspect-square rounded-full grid place-content-center outline outline-1 outline-zinc-500 -outline-offset-2 group">
                    <FaPlus className="text-xs group-hover:scale-125 transition-transform" />
                  </button>
                </div>
                <p className="font-bold text-xl mr-5">
                  <span>${product.price}</span>
                  <span className="text-sm font-medium ml-5">
                    <FaStar className="inline-block mb-[5px] text-yellow-400" />{" "}
                    {product.rating.rate} / {product.rating.count}
                  </span>
                </p>
              </MotionDiv>
              <MotionButton variants={childrenVariants} className="py-3 px-6 font-medium text-sm bg-blue-600 hover:bg-blue-700 rounded-md text-white">
                ADD TO CART
              </MotionButton>
            </div>
          </MotionDiv>
        </div>
      ) : (
        <div>product not found</div>
      )}
    </AnimateComp>
  )
}

export default Page;
