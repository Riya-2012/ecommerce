import { ProductType } from '@/types';
import Image from 'next/image';
import ProductInteraction from '@/components/ProductInteraction';

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  price: 59.9,
  sizes: ["xs", "s", "m", "l", "xl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color?: string; size?: string }>;
}) => {
  const { color, size } = await searchParams;
  const selectedSize = (size || product.sizes[0]) as string;
  const selectedColor = (color || product.colors[0]) as string;
  const productImage = product.images[selectedColor] || product.images[Object.keys(product.images)[0]];

  return (
    <div className='flex flex-col gap-4 lg:flex-row md:gap-12 mt-12'>
      <div className='w-full lg:w-5/12 relative aspect-[2/3]'>
        <Image src={product.images[selectedColor]} alt={product.name} className='object-contain rounded-md' fill></Image>
      </div>
      <div className='w-full lg:w-7/12'>
        <h1 className='text-2xl font-bold'>{product.name}</h1>
        <p className='text-gray-500'>{product.shortDescription}</p>
        <p className='text-gray-500'>{product.description}</p>
        <p className='text-gray-500'>Price: ${product.price.toFixed(2)}</p>
      {/* product innteraction */}
      <ProductInteraction product={product} selectedSize={selectedSize} selectedColor={selectedColor} />

       <div className='flex items-center gap-2 mt-4'>
 <Image src="/klarna.png" alt="klarna" width={50} height={25} className='rounded-md'/>
        <Image src="/cards.png" alt="cards" width={50} height={25} className='rounded-md'/>
        <Image src="/stripe.png" alt="stripe" width={50} height={25} className='rounded-md'/>

       </div>
        <p className='text-gray-500 text-xs'> 
        By Clicking Pay Now, you agree to our <span className='underline hover:text-black'>Terms and Conditions</span> and <span className='underline hover:text-black'>Privacy Policy</span>.
        You authorize us to charge your credit card for the full amount of the purchase. All sales and subject to our <span className='underline hover:text-black'>Returns Policy</span>.
       </p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default ProductPage