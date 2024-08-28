import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { Carousel, Tabs, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { products as initialProducts } from "../../data/products";

let url = import.meta.env.VITE_REACT_APP_API_KEY;

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/our-couture/deluxe-collection/${product.id_title}`);
    };

    return (
        <div
            className="relative w-full h-[30rem] xl:h-[40rem] 2xl:h-[45rem] overflow-hidden shadow-lg cursor-pointer group"
            onClick={handleClick}
        >
            <div className="w-full h-full overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 ease-in-out transform group-hover:scale-125"
                    style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4 flex flex-col justify-end">
                <h2 className="text-white text-2xl font-legitima">
                    {product.name}
                </h2>
                <p className="text-white font-poppins">{product.price}</p>
            </div>
        </div>
    );
};

const ProductList = ({ products }) => {
    return (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default function ProductCatalog() {
    const [products, setProducts] = useState(initialProducts);
    const [sortOrder, setSortOrder] = useState("name-asc");
    const [tabPosition, setTabPosition] = useState("top");

    useEffect(() => {
        const updateTabPosition = () => {
            if (window.innerWidth < 768) {
                setTabPosition("top");
            } else {
                setTabPosition("left");
            }
        };

        updateTabPosition();
        window.addEventListener("resize", updateTabPosition);

        return () => window.removeEventListener("resize", updateTabPosition);
    }, []);

    const handleSort = ({ key }) => {
        let sortedProducts;
        switch (key) {
            case "name-asc":
                sortedProducts = [...products].sort((a, b) =>
                    a.name.localeCompare(b.name)
                );
                break;
            case "name-desc":
                sortedProducts = [...products].sort((a, b) =>
                    b.name.localeCompare(a.name)
                );
                break;
            case "price-asc":
                sortedProducts = [...products].sort(
                    (a, b) =>
                        parseFloat(a.price.replace(/IDR|,/g, "")) -
                        parseFloat(b.price.replace(/IDR|,/g, ""))
                );
                break;
            case "price-desc":
                sortedProducts = [...products].sort(
                    (a, b) =>
                        parseFloat(b.price.replace(/IDR|,/g, "")) -
                        parseFloat(a.price.replace(/IDR|,/g, ""))
                );
                break;
            default:
                sortedProducts = products;
                break;
        }
        setSortOrder(key);
        setProducts(sortedProducts);
    };

    // const menu = (
    //     <Menu onClick={handleSort}>
    //         <Menu.Item key="name-asc">Name: A-Z</Menu.Item>
    //         <Menu.Item key="name-desc">Name: Z-A</Menu.Item>
    //         <Menu.Item key="price-asc">Price: Low to High</Menu.Item>
    //         <Menu.Item key="price-desc">Price: High to Low</Menu.Item>
    //     </Menu>
    // );

    const menuItems = [
        {
            key: "name-asc",
            label: "Name: A-Z",
        },
        {
            key: "name-desc",
            label: "Name: Z-A",
        },
        {
            key: "price-asc",
            label: "Price: Low to High",
        },
        {
            key: "price-desc",
            label: "Price: High to Low",
        },
    ];

    const menu = <Menu items={menuItems} onClick={handleSort} />;

    const items = [
        {
            key: "1",
            label: (
                <h1 className="font-poppins text-sm md:text-base lg:text-lg">
                    Deluxe Collection
                </h1>
            ),
            children: (
                <div className="w-full h-auto p-6">
                    <ProductList products={products} />
                </div>
            ),
        },
        {
            key: "2",
            label: (
                <h1 className="font-poppins text-sm md:text-base lg:text-lg">
                    Other
                </h1>
            ),
            children: (
                <div className="w-full h-screen flex items-center justify-center flex-col">
                    <h1 className="font-legitima text-4xl">Coming Soon</h1>
                    <p className="font-poppins">
                        Stay tuned for new product updates
                    </p>
                </div>
            ),
        },
    ];

    return (
        <>
            <Navbar />
            <section className="w-full">
                <div className="w-full bg-black pt-20 px-6 md:pt-28 md:pb-2 lg:pb-4 xl:pb-6 md:px-20">
                    <Carousel
                        autoplay
                        arrows
                        className="h-32 md:h-60 lg:h-[52vh] 2xl:h-[60vh]"
                    >
                        <img
                            src="/AssetBanner1.png"
                            alt="AssetBanner1"
                            loading="lazy"
                            width={2000}
                            height={2000}
                            className="w-full h-full"
                        />
                        <img
                            src="/AssetBanner2.png"
                            alt="AssetBanner2"
                            loading="lazy"
                            width={20}
                            height={20}
                            className="w-full h-full"
                        />
                        <img
                            src="/AssetBanner3.png"
                            alt="AssetBanner3"
                            loading="lazy"
                            width={20}
                            height={20}
                            className="w-full h-full"
                        />
                        <img
                            src="/AssetBanner4.png"
                            alt="AssetBanner4"
                            loading="lazy"
                            width={20}
                            height={20}
                            className="w-full h-full"
                        />
                    </Carousel>
                </div>
            </section>
            <section className="w-full relative">
                <div className="max-w-screen-2xl m-auto py-10 md:py-20 px-4">
                    <div className="flex justify-end p-4">
                        <Dropdown overlay={menu} trigger={["click"]}>
                            <a
                                className="ant-dropdown-link text-black font-poppins"
                                onClick={(e) => e.preventDefault()}
                            >
                                Sort By <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        tabPosition={tabPosition}
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}
