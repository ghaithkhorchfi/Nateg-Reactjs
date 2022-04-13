import React from 'react';
import Member from './Member';

const Team = () => {
    const team = [
        { id:1, name: 'yahya khalfallah ', role: 'president', img: 'image/yahya.jpg' },
        {id:2, name: 'roua trabelsi', role: ' vice president', img: 'image/roua.jpg' },
        {id:3, name: 'amira bouzezzi', role: 'Resousrce humaine et formation', img: 'image/amira.jpg' },
        {id:4, name: 'houda sayar', role: 'tresoriere', img: 'image/houda.jpg' },
        {id:5, name: 'ghaith khorchfi', role: 'EFS manager', img: 'image/gh2.jpg' },
        {id:6, name: 'jlizi safa', role: 'academy manager', img: 'image/safa.jpg' },
        {id:7, name: 'sameh tamzini', role: 'ER manager', img: 'image/sameh.jpg' },
        {id:8, name: 'imed mnasri', role: 'community service', img: 'image/imed.jpg' },
        {id:9, name: 'ibtissem cherni', role: 'junior manager', img: 'image/ibti.jpg' },
        {id:10, name: 'rahali hamza', role: 'event manager', img: 'image/hamaz.jpg' },
    ]
    return (
        <div>
            <h2 className='text-danger text-center ' >EXECUTIVE BOARD</h2>
            <div className='row bg-light' >
                {team.map((t) => {
                    return <Member key={t.id}  name={t.name} img={t.img} role={t.role} />
                })}
            </div>
        </div>
    );
};

export default Team;
