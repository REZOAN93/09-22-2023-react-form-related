import Brother from "./Brother";
import MySelf from "./MySelf";
import Sister from "./Sister";

const Dad = () => {
  return (
    <div>
      <h1>Dad</h1>
      <section>
        <MySelf></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
