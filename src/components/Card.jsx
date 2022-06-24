import cardStyle from "../scss/card.module.scss";

const Card = ({ data }) => {
  return (
    <main>
      {data.map((item) => {
        const { name, job, comment, img } = item;
        console.log(item);
        return (
          <div className={cardStyle["card"]}>
            <h3>{name}</h3>
            <h5>{job}</h5>
            <p>{comment}</p>
            <img className={cardStyle["images"]} src={img} alt='' />
            <div className={cardStyle["buttonsDiv"]}>
              <button className={cardStyle["smallButton"]}>Small</button>
              <button className={cardStyle["largeButton"]}>Large</button>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Card;
