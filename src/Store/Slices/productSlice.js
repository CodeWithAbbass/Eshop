import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [
      {
        id: "1",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 1900.49,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },

        Quantity: 1,
        Discount: 7,
        Stock: 0,
        isSale: false,
        isSold: true,
      },
      {
        id: "2",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 398.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/c9ac91adf74db1cd3b05d00b79d74e79.jpg",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },

        Quantity: 1,
        Discount: 5,
        Stock: 5,
        isSale: true,
        isSold: false,
      },
      {
        id: "3",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 499.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/9d7753afa123117a91c71f4128ee0516.jpg",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },

        Quantity: 1,
        Discount: "79",
        Stock: 7,
        isSale: true,
        isSold: false,
      },
      {
        id: "4",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 599.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/8b97e6a3b059c6ff91b6b875fd00dfdf.jpg_400x400q75-product.jpg_.webp",

          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },
        Quantity: 1,
        Discount: 59,
        Stock: 0,
        isSale: false,
        isSold: true,
      },
      {
        id: "5",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 699.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/d0e06605c43ba8768f213279d174b90f.jpg_400x400q75-product.jpg_.webp",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },
        Quantity: 1,
        Discount: 12,
        Stock: 8,
        isSale: true,
        isSold: false,
      },
      {
        id: "6",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 799.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/2cb9b1464f1a72336a875e16d251e2ac.jpg_400x400q75-product.jpg_.webp",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },
        Quantity: 1,
        Discount: 68,
        Stock: 4,
        isSale: true,
        isSold: false,
      },
      {
        id: "7",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 899.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/9d5fa841633f15819ee1e4a79813dea6.jpg_400x400q75-product.jpg_.webp",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },
        Quantity: 1,
        Discount: 49,
        Stock: 9,
        isSale: true,
        isSold: false,
      },
      {
        id: "8",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 999.99,
        Rating: 5,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/4ce21cc16af98a77ac8725404bb81f1a.jpg_400x400q75-product.jpg_.webp",
          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },
        Quantity: 1,
        Discount: 55,
        Stock: 10,
        isSale: false,
        isSold: false,
      },
      {
        id: "9",
        Title:
          "Bird Cage Wall Clock European Modern Wall Hanging Wooden Clock Crafts Decoration Home Livingroom Mute Luminous Quartz Wall Clocks Mural Ornaments Art",
        Price: 1199.99,
        Rating: 3,
        Image: {
          MainImage:
            "https://static-01.daraz.pk/p/b62dce95b2b45dc77f9ed2b22d6587ca.jpg_400x400q75-product.jpg_.webp",

          SideImage: [
            "https://static-01.daraz.pk/p/16f11a076842f52e02e348716ee7d2c2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d8a4f18d3a37bc4708c42264dd420282.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/e9a1f49b5594b1397d726b1ed9bdc028.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/d7ce381df8a4bdf861abf7c82013081a.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/309a3ca50cdac0cdf8fd1f3419ce3a7d.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/7f4094287772a43e601364a31f391df0.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/1716c6e1f1787ed0caa2cfc601fa14b2.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/6131894687a6020b4e66284cb90af8b9.jpg_720x720.jpg_.webp",
            "https://static-01.daraz.pk/p/39f806d9933360847558e2f3d3b91063.jpg_720x720.jpg_.webp",
          ],
        },
        Quantity: 1,
        Discount: 45,
        Stock: 6,
        isSale: false,
        isSold: false,
      },
    ],
    loading: false,
    error: "",
    layout: {
      Grid3x: false,
      Grid4x: false,
      Grid6x: true,
    },
  },
  reducers: {
    addProduct(state, action) {
      console.log(state.items);
    },
    updateProduct(state, action) {
      console.log(state);
    },
    deleteProduct(state, action) {
      // console.log(action.payload);
      return state;
    },
    changeLayout(state, action) {
      const Grid = action.payload;

      for (let key in state.layout) {
        // if (Object.hasOwnProperty.call(state.layout, key)) {
        if (key == Grid) {
          state.layout[Grid] = true;
        } else {
          state.layout[key] = false;
        }
        // }
      }
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateProduct, deleteProduct, changeLayout } =
  productSlice.actions;
export default productSlice.reducer;
