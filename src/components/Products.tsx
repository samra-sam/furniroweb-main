// import Image from "next/image";
// import Dinning from "@/Pictures/dining.png"
// // import Bedroom from "../public/bedroom.png"
// export default function Products(){

//     interface Card{
//         name: string,
//         age: number,
//         description: string,
//         image: string,
//         price: string,
//       }

//     const data: Card[] = [
//         {
//           name: 'Syltherine',
//           price: "Rp 2.500.000",
//           age: 30,
//           image: "/images.png",
//           description: 'Stylish cafe chair',
//         },
//         {
//           name: 'Jane Smith',
//           price: "Rp 2.500.000",
//           age: 25,
//           image: "images.png",
//           description: 'A creative designer who loves creating stunning visuals.',
//         },
//         {
//           name: 'Sam Wilson',
//           price: "Rp 2.500.000",
//           age: 28,
//           image: 'https://via.placeholder.com/100',
//           description: 'A software engineer specializing in backend systems.',
//         },
//         {
//           name: 'Sam Wilson',
//           price: "Rp 2.500.000",
//           age: 28,
//           image: 'https://via.placeholder.com/100',
//           description: 'A software engineer specializing in backend systems.',
//         },
//         {
//           name: 'Sam Wilson',
//           price: "Rp 2.500.000",
//           age: 28,
//           image: 'https://via.placeholder.com/100',
//           description: 'A software engineer specializing in backend systems.',
//         },
//         {
//           name: 'Sam Wilson',
//           price: "Rp 2.500.000",
//           age: 28,
//           image: 'https://via.placeholder.com/100',
//           description: 'A software engineer specializing in backend systems.',
//         },
//         {
//           name: 'Sam Wilson',
//           price: "Rp 2.500.000",
//           age: 28,
//           image: 'https://via.placeholder.com/100',
//           description: 'A software engineer specializing in backend systems.',
//         },
//         {
//           name: 'Sam Wilson',
//           price: "Rp 2.500.000",
//           age: 28,
//           image: 'https://via.placeholder.com/100',
//           description: 'A software engineer specializing in backend systems.',
//         },
//       ];
    
//     return (
//         <>
//         <div  className="product">
//             <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
//             </div>
//             <div className="cardsContainer">
//             {data.map((card, index) => (
              
//             <div className="card" key={index} style={{ width: "15rem" }}>
//                 <img
//                   src={card.image}
//                   style={{ width: "18rem", height: "18rem" }}
//                   className="card-img-top"
//                 //   alt={card.title}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title" style={{ fontWeight: "bold" }}>
//                     {card.name}
//                   </h5>
//                   <p className="card-text">{card.description}</p>
//                   <h5 className="card-title" style={{ fontWeight: "bold" }}>
//                     {card.price}
//                   </h5>
//             </div>
//             </div>
//                     ))}


//         </div>
//         <div className="flex items-center justify-center mb-12">
//        <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
//         </div>
//         </>
//     )
// }



// import ShopHeader from "../components/shoptop";
import Image from "next/image";
export default function Products(){
 
    interface Card{
        name: string,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          image: "/Images.png",
          description: 'Stylish cafe chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          image: '/image 2.png',
          description: 'Stylish cafe chair',
        },
        {
          name: 'Lolito',
          price: "Rp 7.000.000",
          image: '/Images (1).png',
          description: 'Luxury big sofa.',
        },
        {
          name: 'Respira',
          price: "Rp 5.000.000",
          image: '/Images (2).png',
          description: 'Outdoor bar table and stool',
        },
        
      ];
    
    return (
        <div className="w-[1440px] h-[2880px] flex-col justify-center items-center">
       {/* <ShopHeader/> */}
       <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            <div className="w-[1440px] h-[2034px] m-[50px] flex flex-wrap justify-center items-center">
            {data.map((card, index) => (
  <div className="w-1/4" key={index}>
    <div className="w-[285px] h-[446px] flex-shrink-0 bg-customLightGray relative">
      {/* Discount Badge for 1st Card */}
      {(index % 4 === 0) && ( // Only for the 1st card of each row
        <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
          -30%
        </div>
      )}
      
      {/* Discount Badge for 3rd Card */}
      {(index % 4 === 2) && ( // Only for the 3rd card of each row
        <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-red-400 rounded-full">
          -30%
        </div>
      )}

      {/* "New" Badge for 4th Card */}
      {(index % 4 === 3) && ( // Only for the 4th card of each row
        <div className="w-[40px] h-[40px] top-[12px] right-[20px] flex justify-center items-center absolute text-white bg-[#2EC1AC] rounded-full">
          New
        </div>
      )}

      <img
        src={card.image}
        style={{ width: "18rem", height: "18rem" }}
        className="card-img-top"
        alt={card.description}
      />
      <div className="flex items-center justify-center pb-2">
        <div className="w-[249px] h-[99px] flex flex-col justify-evenly mt-[1.75rem]">
          <h5 className="text-[24px] font-semibold leading-[120%]">
            {card.name}
          </h5>
          <p className="text-[16px] font-medium leading-[150%] text-customGreyText">
            {card.description}
          </p>
          {/* Render the price based on the card's position */}
          <span className="text-[20px] font-medium leading-[150%] mr-2">
            {(index % 4 === 0 || index % 4 === 2) ? "Rp 2.500.000" : card.price}
          </span>
          {/* Only show the discounted price on 1st and 3rd cards */}
          {(index % 4 === 0 || index % 4 === 2) && ( // For 1st and 3rd cards in each row
            <span>
              {/* <span className="text-[20px] font-medium leading-[150%] mr-2">{(index % 4 === 0 || index % 4 === 2) ? "Rp 2.500.000" : card.price}</span> */}
              <span className="text-[16px] leading-[150%] text-[#B0B0B0] line-through">
                {card.price} {/* Show old price only on 1st and 3rd cards */}
              </span >
            </span>
          )}
        </div>
      </div>
    </div>
  </div>
))}

        </div>
        <ul className="flex mx-auto my-12 gap-8 divide-x-2 overflow-hidden w-max font-[sans-serif]">
      <li
        className="flex items-center justify-center shrink-0 px-4 py-2 bg-customGold cursor-pointer text-base font-bold text-gray-500">
        1
      </li>
      <li
        className="flex items-center justify-center shrink-0 px-4 py-2 bg-[#F9F1E7] cursor-pointer text-base font-bold text-gray-800">
            2
      </li>
      <li
        className="flex items-center justify-center shrink-0 px-4 py-2 bg-[#F9F1E7] cursor-pointer text-base font-bold text-gray-500">
        3
      </li>
      <li className="flex items-center justify-center shrink-0 px-4 py-2 bg-[#F9F1E7] cursor-pointer text-sm text-gray-800">
        Next
      </li>
    </ul>
    <Image src={"/Frame 161.png"} alt="trust building banner" width={1440} height={270}/>
        </div>


    )
}