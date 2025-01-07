export default async function page({ params }) {
  const { productdetails } = params;
  console.log(productdetails);

  return <div>product details</div>;
}
