import React from "react";
import ProductCard from "./ProductCard";

function App() {
  const buyProduct = (name) => {
    alert(`Bạn vừa mua sản phẩm: ${name}`);
  };

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>

      <ProductCard
        title="Laptop Dell XPS"
        price={30000000}
        inStock={true}
        details={{ description: "Laptop cao cấp, hiệu năng mạnh mẽ" }}
        onBuy={() => buyProduct("Laptop Dell XPS")}
      >
        <small>Bảo hành 24 tháng</small>
      </ProductCard>

      <ProductCard
        title="iPhone 15 Pro"
        price={35000000}
        inStock={false}
        details={{ description: "Điện thoại flagship mới nhất của Apple" }}
        onBuy={() => buyProduct("iPhone 15 Pro")}
      >
        <span style={{ color: "red" }}>Hết hàng - Vui lòng đặt trước</span>
      </ProductCard>
    </div>
  );
}

export default App;

