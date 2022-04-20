import React, { useEffect, useState } from 'react'
import { Header } from '../../global/header/header';
import { homeStyle } from './home-style';
import PatientRow from './patient-row/patient-row';

export const Home = () => {
  const classes = homeStyle();
  const users = [
    {
      name: "Ana Isabel Victoria",
      age: "25",
      cell: '3156628465',
      mail: 'anivi69@gmail.com',
      occupation: 'Diseñadora UX/UI'
    },
    {
      name: "Maria José Arias",
      age: "25",
      cell: '318264460',
      mail: 'majota@gmail.com',
      occupation: 'Diseñadora UX/UI'
    },
  ];

  const [userFiltered, setUserFiltered] = useState([])

  const [pacient, setPatient] = useState("")
  const [isFiltered, setIsFiltered] = useState(false)

  const handleChangePatient = (e)=>{
    const {target : {value}} = e;
    setPatient(value);
  };

  const handleFilter = () => {
    const newArray = users.filter((user) => user.name.includes(pacient));
    setUserFiltered(newArray);
    setIsFiltered(true)
  };

  useEffect(() => {
    if (pacient === "" && isFiltered) {
      setUserFiltered([]);
      setIsFiltered(false)
    }
  
    return () => {

    }
  }, [pacient, isFiltered])
  

  return (
    <>
      <Header />
      <div className={classes.home}>
        <h2 className={classes.home__title}>Tus pacientes</h2>
        <div className={classes['search-input']}>
          <div className={classes['search-input__container']}>
            <div className={classes['search-input__input-container']}>
              <img className={classes['input-container__icon']} src="/content/img/general-icons/search.svg" alt="" />
              <input onChange={handleChangePatient} className={classes['input-container__input']} placeholder="Buscar paciente" type="text" />
            </div>
            <div onClick={handleFilter} className={classes['search-input__button']}>
              <img src="/content/img/general-icons/search-white.svg" alt="" />
            </div>
          </div>
          <div className={classes['add-button']}>
            <img src="/content/img/general-icons/add-icon.svg" alt="" />
            <label htmlFor="">Agregar paciente</label>
          </div>
        </div>
        <div className={classes['table-header']}>
          <label htmlFor="" style={{width: '20%'}}>Nombre de paciente</label>
          <label htmlFor="" style={{width: '10%'}}>Edad</label>
          <label htmlFor="" style={{width: '10%'}}>Teléfono</label>
          <label htmlFor="" style={{width: '20%'}}>Email</label>
          <label htmlFor="" style={{width: '20%'}}>Ocupación</label>
        </div>
        <div className={classes['table-contain']}>
          {
            pacient !== '' && isFiltered?
            userFiltered.map((user)=> {
              return (<PatientRow name={user.name} age={user.age} cell={user.cell} mail={user.mail} occupation={user.occupation}/>)
            })
            :
            users.map((user)=> {
              return (<PatientRow name={user.name} age={user.age} cell={user.cell} mail={user.mail} occupation={user.occupation}/>)
            })
          }
        </div>
      </div>
    </>
  );
};