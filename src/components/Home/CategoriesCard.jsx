import { Link } from "react-router-dom";

const CategoriesCard = () => {
  const Categories = [
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/3e2b2635de3ab4183a399e7d28cf9dd2.jpg",
      CName: "Door hardware & locks",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/f095d57c42f5d8432303ed5d837b9e2f.jpg",
      CName: "Door hardware & locks",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/2bffc4870c24f3e43b44a13b509131da.jpg",
      CName: "Potatoes",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/b5829b8116eb45bae921b5c26599344c.jpg",
      CName: "Wireless Earbuds",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/1e04fd8d0916566ab2e5013fd9c7a96e.jpg",
      CName: "Moisturizers and Cream",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/25fc403c14394708db6d22734e443b8b.jpg",
      CName: "Hair Treatments",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/4c0181639475f30484943e3cf8f3c970.jpg",
      CName: "Decorative Door Steps",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/042d8ba4f245f6b51f8da51f5621c991.jpg",
      CName: "Bathroom Counter Storage",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/ccb6372b812a5874c3bdd1e724108149.jpg",
      CName: "Fashion Backpacks",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/original/96334df652f11c9ca0c09b463363846c.jpg",
      CName: "Dresses",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/0f77fbf02a8334d489d09eb0b84097f0.jpg",
      CName: "Wardrobs Organisers",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/e21875092e5b293f4c83f3b7903bbb93.jpg",
      CName: "Cabinat Locks & Straps",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/3f9a4f513758dfae40879e56e882dbd5.jpg",
      CName: "Pecifiers",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/f110456c54bc1fc55934da1676813ac2.jpg",
      CName: "Gravity Water Dispenser",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/f9fbae2b025be07c4eae4fe29ceab144.jpg",
      CName: "Hijabs",
    },
    {
      CLink: "/",
      CImage:
        "https://static-01.daraz.pk/p/a72ef188ba3c50be776f98abeeb8d565.jpg",
      CName: "Water Bottles",
    },
  ];
  return (
    <div className="Home_Categories_Container w-100 container-xl my-4">
      <div className="Home_Categories_Heading_Container">
        <h3 className="Home_Section_Heading mb-0">Categories</h3>
      </div>
      <div className="Home_Categories_Content_Container py-4">
        {Categories.length == 0
          ? ""
          : Categories.map((item, index) => {
              const { CLink, CImage, CName } = item;
              return (
                <div
                  className="HCC_Item d-inline-block text-center"
                  key={index}
                >
                  <Link className="HCC_Item_Link" to={CLink}>
                    <div className="HCC_Item_Image_Container">
                      <img
                        className="HCC_Item_Image h-100"
                        src={CImage}
                        alt={CName}
                      />
                    </div>
                    <div className="HCC_Item_Name">{CName}</div>
                  </Link>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default CategoriesCard;
