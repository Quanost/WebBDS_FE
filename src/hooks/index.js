import React from "react";

export const useImage = (listImage = []) => {
  const [image, setImage] = React.useState(() => {
    if (listImage.length === 0) return "";

    return listImage[0];
  });

  React.useEffect(() => {
    const INTERVAL_TIMING = 2_000;
    let count = 0;

    const intervalSetImage = setInterval(() => {
      setImage(listImage[count]);

      count++;
      if (count >= listImage.length) count = 0;
    }, INTERVAL_TIMING);

    return () => clearInterval(intervalSetImage);
  }, [listImage]);

  return image;
};
