import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import { mobile } from "../responsive";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;
const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;
const Input = styled.input`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value.toLowerCase(),
    });
  };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{category.toUpperCase()}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Input onChange={handleFilters} placeholder="Brand" name="brand" />
          {/* <Select name="type" onChange={handleFilters}>
            <Option disabled selected>
              Type
            </Option>
            <Option value="motherboard">Motherboard</Option>
            <Option value="processor">Processor</Option>
            <Option value="gpu">Video Card</Option>
            <Option value="memory">Memory</Option>
            <Option value="storage">Storage</Option>
            <Option value="psu">PSU</Option>
            <Option value="fan">FAN</Option>
            <Option value="case">Casing</Option>
            <Option value="monitor">Monitor</Option>
            <Option value="laptop">Laptop</Option>
          </Select> */}
          {/* <Select name="brand" onChange={handleFilters}>
            <Option disabled selected>
              Brand
            </Option>
            <Option value="intel">Intel</Option>
            <Option value="amd">AMD</Option>
            <Option value="nvidia">NVidia</Option>
            <Option value="apacer">Apacer</Option>
            <Option value="msi">MSI</Option>
          </Select> */}
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products category={category} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
