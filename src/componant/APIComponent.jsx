import { useState, useEffect } from "react";
import axios from "axios";
import DisplayResult from "./DisplayResult"; // الكومبوننت اللي بيعرض النتيجة

export default function APIComponent({ searchWord }) {
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    if (searchWord) {
      try {
        const response = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
        );
        console.log(response.data);
        setResult(response.data);
      } catch (error) {
        console.error("Error fetching the word data:", error);
        setResult(null);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchWord]);

    return (
      <div>
        {result ? <DisplayResult data={result} /> : null}
      </div>
    );
     
}
