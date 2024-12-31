import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsList = () => {
  const { products } = useLoaderData()

  return (
    <div className="mt-12 grid gap-y-8">
      {products.map((product) => {
        const { title, price, image, company } = product.attributes
        const dollarsAmount = formatPrice(price)
        return (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className=" p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl duration-300 group "
          >
            <img
              src={image}
              alt={title}
              className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover group-hover:scale-105 transition duration-300 "
            />
            <div className="ml-0 sm:ml-16">
              <h3 className="capitalize font-medium text-lg">{title}</h3>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarsAmount}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsList

// ## Challenge (24) - Products Container

// - create ProductsList and render products in one column
// - setup header (with total jobs and toggle buttons)
// - toggle between ProductsGrid and ProductsList

// /3. Component Structure:

//    - Return a `div` element containing a list of products.

// 4. Loop Through Products:

//    - Use the `useLoaderData` hook to get the `products` data from the loader.
//    - Use the `map` function to loop through each product in the `products` array.

// 5. Product Link:

//    - For each product, create a `Link` element that links to the individual product page.
//    - Use the `product.id` as the link path (`to={`/products/${product.id}`}`).
//    - Add CSS classes to style the link and apply hover effects.

// 6. Product Image:

//    - Display the product image inside an `img` element.
//    - Apply appropriate classes for styling and responsive design.
//    - Add hover effect to the image using CSS classes.

// 7. Product Details:

//    - Display the product title and company using `h3` and `h4` elements.
//    - Add classes for font styles and responsiveness.

// 8. Product Price:

//    - Display the formatted price using the `formatPrice` function.
//    - Use a `p` element with appropriate classes for styling.

// 9. Export ProductList Component:
//    - Export the `ProductList` component as the default export of the module
