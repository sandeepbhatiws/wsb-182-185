import axios from "axios"
import { toast } from "react-toastify"

const menProducts = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products.php`, {
        params : {
          limit : 8,
          categories : 'mens-shirts,mens-shoes'
        }
    })
    .then((result) => {
        return result.data.data
    })
    .catch(() => {
      toast.error('Something went wrong !!')
    })
}

const womenProducts = () => {
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/products.php`, {
        params : {
          limit : 8,
          categories : 'tops,womens-bags,womens-dresses,womens-shoes,womens-watches,womens-jewellery,skin-care'
        }
    })
    .then((result) => {
        return result.data.data
    })
    .catch(() => {
      toast.error('Something went wrong !!')
    })
}

export {menProducts, womenProducts}