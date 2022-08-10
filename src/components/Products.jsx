import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  /* display: flex; */
  padding: 20px;
  /* flex-wrap: wrap;
  justify-content: space-between; */
  text-align: center;
`;
const Title = styled.h1`
  margin-top: 10px;
`;
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      <Title>POPULAR ITEMS</Title>
      <ProductsWrapper>
        {popularProducts.map((item) => (
          <Product item={item} key={item.id} />
        ))}
      </ProductsWrapper>
    </Container>
  );
};

export default Products;
