import { useEffect, useState } from "react";
import { useFilter } from "./FilterContext";

interface Product {
  category: string;
}
interface FetchResponse {
  products: Product[];
}

const Sidebar = () => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState<string[]>([]);
  const [keywords] = useState<string[]>([
    "fashion",
    "trend",
    "beauty",
    "furniture",
    "shoes",
    "watch",
    "tech",
    "shirt",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data: FetchResponse = await res.json();

        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        ).sort();
        setCategories(uniqueCategories);
      } catch (err) {
        console.error("Error fetching categories", err);
      }
    };

    fetchCategories();
  }, []);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategories = (category: string) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword: string) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className="w-1/5 h-screen p-5 mt-3">
      <h1 className="mt-4 mb-10 text-2xl font-bold">YoPasal</h1>

      <section>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Products"
          className="w-full px-2 py-3 border-2 rounded-lg sm:mb-0"
        />

        <div className="flex items-center justify-center mt-3">
          <input
            type="text"
            placeholder="Min"
            value={minPrice ?? ""}
            className="w-full px-5 py-3 mb-3 mr-2 border-2"
            onChange={handleMinPriceChange}
          />
          <input
            type="text"
            placeholder="Max"
            value={maxPrice ?? ""}
            className="w-full px-5 py-3 mb-3 mr-2 border-2"
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Filter by category */}
        <section>
          <div className="w-full mb-3">
            <h2 className="mb-3 text-xl font-semibold ">
              Filter By Categories
            </h2>
          </div>
          {categories.map((category, index) => (
            <label key={index} className="block mb-2">
              <input
                type="radio"
                name={category}
                value={category}
                className="mr-2 w-[16px] h-[16px]"
                checked={selectedCategory === category}
                onChange={() => handleRadioChangeCategories(category)}
              />
              {category.toUpperCase()}
            </label>
          ))}
        </section>

        {/* Filter by keywords */}
        <section>
          <div className="mt-5 mb-3">
            <h2 className="mb-3 text-xl font-semibold">Filter By Keywords</h2>
          </div>
          {keywords.map((keyword, index) => (
            <button
              key={index}
              onClick={() => handleKeywordClick(keyword)}
              className="block w-full px-4 py-2 mb-2 text-left border rounded-lg hover:bg-gray-100"
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </section>

        {/* Reset Button */}
        <button
          onClick={handleResetFilters}
          className="w-full mb-[4rem] py-2 bg-red-600 text-white font-semibold rounded-lg mt-5"
        >
          Reset Filters
        </button>
      </section>
    </div>
  );
};

export default Sidebar;
