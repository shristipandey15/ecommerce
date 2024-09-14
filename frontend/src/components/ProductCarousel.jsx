import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productsApiSlice';

// Importing images from your assets folder
import img from '../assets/img2.jpg';
import img1 from '../assets/img.jpg';
import img4 from '../assets/img4.jpg';


const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();

  // Array of custom images
  const carouselImages = [img, img1, img4];

  return isLoading ? null : error ? (
    <Message variant="danger">{error?.data?.message || error.error}</Message>
  ) : (
    <div style={{ width: '100%', overflow: 'hidden', margin: 0, padding: 0 }}>
      <Carousel pause="hover" className="bg-primary mb-4">
        {products.map((product, index) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/Rs${product._id}`}>
              {/* Use custom images from assets */}
              <Image
                src={carouselImages[index % carouselImages.length]}
                alt={product.name}
                fluid
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                className="d-block"
              />
              <Carousel.Caption
                className="carousel-caption"
                style={{ textAlign: 'right' }}
              >
                <h2 className="text-white">
                  {product.name} (Rs{product.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
