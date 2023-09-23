import Cousin from "./Cousin";

const Uncle = () => {
    return (
        <div>
            <h1>Uncle</h1>
            <section>
                <Cousin cousinname={'Shawon'}></Cousin>
                <Cousin cousinname={'Ena'}></Cousin>
                <Cousin cousinname={'Sakib'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;