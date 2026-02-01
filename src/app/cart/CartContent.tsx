"use client";

import { CartItemType, shippingFormInputs } from "@/types";
import { ArrowRight, Trash2 } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import ShippingForm from "@/components/ShippingForm";
import { useState } from "react";
import Payment from "@/components/Payment";
import Image from "next/image";

const steps = [
  { id: 1, title: "Shopping Cart" },
  { id: 2, title: "Shipping Address" },
  { id: 3, title: "Payment Method" },
];

const cartItems: CartItemType[] = [
  {
    id: 1,
    name: "Adidas CoreFit T-Shirt",
    shortDescription: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet",
    price: 39.9,
    sizes: ["s", "m", "l"],
    colors: ["gray"],
    images: { gray: "/products/1g.png" },
    quantity: 1,
    selectedSize: "m",
    selectedColor: "gray",
  },
];

export default function CartContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeStep = Number(searchParams.get("step") || 1);

  const [shippingForm, setShippingForm] =
    useState<shippingFormInputs | null>(null);

  return (
    <div className="flex flex-col gap-8 items-center  justify-center mt-12 ">
      <h1 className="text-2xl font-medium">Your Shopping Cart</h1>

      {activeStep === 1 &&
        cartItems.map((item) => (
          <div key={item.id} className="flex gap-6">
            <Image
              src={item.images[item.selectedColor]}
              alt={item.name}
              width={120}
              height={120}
            />
            <Trash2 className="text-red-500 cursor-pointer" />
          </div>
        ))}

      {activeStep === 2 && (
        <ShippingForm setShippingForm={setShippingForm} />
      )}

      {activeStep === 3 && shippingForm && <Payment />}

      {activeStep === 1 && (
        <button
          onClick={() => router.push("/cart?step=2")}
          className="mt-6 bg-black text-white px-4 py-2"
        >
          Continue <ArrowRight />
        </button>
      )}
    </div>
  );
}
