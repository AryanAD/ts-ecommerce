import { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me/api/?results=5");
        const data = await res.json();

        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.large,
        }));
        setAuthors(authorsData);
      } catch (err) {
        console.error(`Error fetching authors: ${err}`);
      }
    };

    fetchData();
  }, []);

  const handleFollowClick = (index: number) => {
    setAuthors((prevAuthor) =>
      prevAuthor.map((author, i) =>
        i === index ? { ...author, isFollowing: !author.isFollowing } : author
      )
    );
  };

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h1 className="mb-5 text-xl font-bold">Top Sellers</h1>
      <ul>
        {authors.map((author, index) => (
          <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex items-center justify-center">
              <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-[25%] justify-center rounded-full"
              />

              <span className="ml-3">{author.name}</span>
            </section>

            <button
              onClick={() => handleFollowClick(index)}
              className={`py-1 px-3 rounded ${
                author.isFollowing
                  ? "bg-red-500 text-white"
                  : "bg-black-500 text-white"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
