import { IItem } from "data";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export const useStars = () => {
    const handleStarsList = (item: IItem) => {
        const starsList = [1, 2, 3, 4, 5].map((arrayElement, index) => {
            const isMoreFillStars = item.stars - 1 >= index;
      
            if (isMoreFillStars) {
              return <AiFillStar style={{ color: "black" }} key={arrayElement} />;
            } else {
              return <AiOutlineStar style={{ color: "black" }} key={arrayElement} />;
            }
          });

          return starsList
    }

      return { handleStarsList };
}