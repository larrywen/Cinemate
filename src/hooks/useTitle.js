import {useEffect} from "react"

export const useTitle = (title) => {
      console.log(title);
    useEffect(() => {
        document.title = `${title} / Cinamate`;
    });

    return null;
  };

