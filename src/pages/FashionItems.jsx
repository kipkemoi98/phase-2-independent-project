import { useState, useEffect } from "react";
import axios from "axios";
import fashions from "./Items";

export default function FashionItem() {
  const [recipes, setFashions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const response = await axios.get(
      "https://boiling-hollows-58510.herokuapp.com/recipe"
    );
    setFashions(response.data);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      fetchData();
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {fashions.map((fashion) => (
            <fashions key={fashion.id} fashion={fashion} />
          ))}
        </div>
      )}
    </div>
  );
}