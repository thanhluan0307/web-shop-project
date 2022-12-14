import styles from '~/page/Profile/profile.module.scss'
import { useSelector } from "react-redux";
import { React } from 'react';


import { Link } from 'react-router-dom';

export const FavouriteProduct = () => {
  const data = useSelector(state=>state.favourite)
  console.log(data)
 
  const link = process.env.REACT_APP_BASE_URL


  return (
    <div className={styles.wrapper}>
    <div className={styles.container}>
      <div>
        <table className={styles.table} width={'100%'}>
          <thead>
            <tr>
              <td>Ảnh</td>
              <td>Tên sản phẩm</td>
              <td>Giá</td>
              <td>Hành động</td>
            </tr>
          </thead>
          <tbody>
           {
           data.length === 0 ?
              <tr>
                <td colSpan={4}> <center>Không có sản phẩm yêu thích nào</center> </td>
              </tr>
            :
            data.map(item => {
              return (
                  data.length === 0
                  ? 'Không có sản phẩm yêu thích nào'
                  :
                  <tr key={item._id}>
                    <td>
                      <img className={styles.img_wishlist} src={link + item.thumbnail} alt="" />
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.price? item.price.toLocaleString('vi') + ' VNĐ' : '10.000.000 VNĐ'}  </td>
                    <td><Link to={`/product/${item._id}`}>Mua</Link></td>
                  </tr>
               )
              }
            )
           }
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
