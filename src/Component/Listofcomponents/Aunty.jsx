import Cousin from "./Cousin";

const Aunty = () => {
    return (
        <div>
            <h1>Aunty</h1>
            <section>
                <Cousin cousinname={'Rafsan'}></Cousin>
                <Cousin cousinname={'Messi'}></Cousin>
                <Cousin cousinname={'dESHI'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;