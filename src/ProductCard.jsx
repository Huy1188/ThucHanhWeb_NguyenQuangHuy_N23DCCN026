import React from "react";

function ProductCard({ title, price, inStock, details, onBuy, children }) {
  return (
    <div style={{ 
        border: "2px solid #4CAF50", 
        borderRadius: "10px", 
        padding: "15px", 
        margin: "10px", 
        maxWidth: "250px" 
      }}>
      <h2>{title}</h2>
      <p>Giá: {price}₫</p>
      <p>Tình trạng: {inStock ? "Còn hàng ✅" : "Hết hàng ❌"}</p>
      <p>Mô tả: {details.description}</p>
      <button onClick={onBuy}>Mua ngay</button>
      <div style={{marginTop: "10px"}}>{children}</div>
    </div>
  );
}

export default ProductCard;