import React from "react";
import "../styles/MainNavigation.css";
const Menu = () => {
  return (
    <div className="menu-container">
      <a href="/" className="menu-item">Trang Chủ</a>
      <a href="/category/san-pham-noi-bat" className="menu-item">Sản Phẩm Nổi Bật</a>
      <a href="/category/hang-moi-ve" className="menu-item">Hàng Mới Về</a>
      <a href="/category/ao-nam" className="menu-item">Áo Nam</a>
      <a href="/category/ao-nu" className="menu-item">Áo Nữ</a>
      <a href="/category/quan-nam" className="menu-item">Quần Nam</a>
      <a href="/category/quan-nu" className="menu-item">Quần Nữ</a>
      <a href="/category/vay" className="menu-item">Váy</a>
      <a href="/category/giay-dep" className="menu-item">Giày Dép</a>
      <a href="/category/tui-xach" className="menu-item">Túi Xách</a>
      <a href="/category/mu-non" className="menu-item">Mũ & Nón</a>
      <a href="/category/phu-kien" className="menu-item">Phụ Kiện</a>
      <a href="/category/do-bo" className="menu-item">Đồ Bộ</a>
      <a href="/category/ao-len" className="menu-item">Áo Len</a>
      <a href="/category/giam-gia" className="menu-item">Giảm Giá</a>
      <a href="#" className="menu-item">...</a>
    </div>
  );
};

export default Menu;
