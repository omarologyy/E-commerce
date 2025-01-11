const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest ">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        For this website you can display of products or services with
        descriptions, images, prices, and specifications. There is Easy
        navigation and search tools to help users find specific items. It allows
        customers to add items they want to purchase and review their
        selections. There is secure methods for making online payments using
        credit cards, PayPal, or other methods. It enables customers to create
        accounts for faster checkout, order tracking, and personalized
        experiences. As For sellers to manage orders, inventory, and shipping.
        it's Optimized for browsing and shopping on mobile devices. SSL
        certificates and encryption to protect customer data.
      </p>
    </>
  )
}
export default About
