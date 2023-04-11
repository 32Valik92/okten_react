import '../../App.css'

const Simpson = ({familyMember}) => {
    return (
        <div className="simpson">
            <p><b>{familyMember.name} {familyMember.surname}</b></p>
            <p>I'm {familyMember.age} years old</p>
            <p>{familyMember.info}</p>
            <img src={familyMember.photo} alt={familyMember.name}/>

        </div>
    );
};

export default Simpson;