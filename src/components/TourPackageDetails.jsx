import { useParams } from "react-router-dom";
import { tourPackages } from "../../utils/constants";
import Layout from "./Layout";
import Testimonial from "./Testimonial";
function TourPackageDetails() {
  const { id } = useParams();
  const packageDetail = tourPackages.find((item) => item.id === Number(id));
  console.log({ packageDetail }, { id });
  return (
    <Layout>
      <div>
        TourPackageDetails for package {id}
        <p>{packageDetail.date}</p>
        <p>{packageDetail.about}</p>
        <img src={packageDetail.img} alt="" />
      </div>
      <Testimonial/>
    </Layout>
  );
}

export default TourPackageDetails;
