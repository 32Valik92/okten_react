import Simpson from "../simpson/Simpson";

const Simpsons = ({family}) => {
    return (
        <div>
            <h3>Task №1</h3>
            {
                family.map((familyMember, index) => (
                    <Simpson familyMember={familyMember} key={index}/>
                ))
            }
        </div>
    );
};

export default Simpsons;