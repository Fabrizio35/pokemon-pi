import React, { useEffect, useState } from "react";
import style from "./Form.module.css";
import { getAllTypes } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";

const validate = (form) => {
    let errors = {};
    
    if (!form.name) {
        errors.name = "El nombre es obligatorio";
    } else if (form.name.length <= 2) {
        errors.name = "El nombre debe tener por lo menos 3 caracteres";
    } else if (!/^([^0-9]*)$/.test(form.name)) {
        errors.name = "El nombre no puede contener números";
    };

    if (!form.image) {
        errors.image = "La imagen es obligatoria";
    } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(form.image)) {
        errors.image = "La imagen debe ser una url";
    };

    if (!form.hp) {
        errors.hp = "La vida es obligatoria";
    } else if (form.hp < 1 || form.hp > 999) {
        errors.hp = "La vida debe ser entre 1 y 999";
    };

    if (!form.attack) {
        errors.attack = "El ataque es obligatorio";
    } else if (form.attack < 1 || form.attack > 999) {
        errors.attack = "El ataque debe ser entre 1 y 999";
    };

    if (!form.defense) {
        errors.defense = "La defensa es obligatoria";
    } else if (form.defense < 1 || form.defense > 999) {
        errors.defense = "La defensa debe ser entre 1 y 999";
    };

    if (form.speed < 1 || form.speed > 999) {
        errors.speed = "La velocidad debe ser entre 1 y 999";
    };

    if (form.height < 1 || form.height > 999) {
        errors.height = "La altura debe ser entre 1 y 999";
    };

    if (form.weight < 1 || form.weight > 999) {
        errors.weight = "El peso debe ser entre 1 y 999";
    };

    if (form.typesId.length > 2) {
        errors.types = "No puede tener mas de 2 tipos";
    };

    return errors;
};

const Form = () => {
    const dispatch = useDispatch();
    const typesApi = useSelector(state => state.types);

    const [form, setForm] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        typesId: [],
    });

    const [errors, setErrors] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: "",
    });

    const [focus, setFocus] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
    });

    const changeInputHandler = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        const typeCheck = event.target.type;

        if (typeCheck === "checkbox") {
            if (event.target.checked === true) {
                setForm({...form, typesId: [...form.typesId, value]});
                setErrors(validate({...form, types: [...form.typesId, property]}));
            } else {
                setForm({...form, typesId: form.typesId.filter(elem => elem !== value)});
                setErrors(validate({...form, types: form.typesId.filter(elem => elem !== property)}));
            };   
        } else {
            setForm({...form, [property]: value});
            setErrors(validate({...form, [property]: value}));
        };
    };

    const focusHandler = (event) => {
        const property = event.target.name;

        setFocus({...focus, [property]: property});
    };

    const submitHandler = (event) => {
        let finalForm = {...form};
        if (finalForm.speed === "") {
           finalForm = {...finalForm, speed: null};
        };
        if (finalForm.height === "") {
            finalForm = {...finalForm, height: null};
        };
        if (finalForm.weight === "") {
            finalForm = {...finalForm, weight: null};
        };
        event.preventDefault();
        axios.post("http://localhost:3001/pokemons", finalForm).then(alert("Pokemon creado correctamente"));
        location.reload();
    };

    useEffect(() => {
        dispatch(getAllTypes());
    }, []);

    useEffect(() => {
        setErrors(validate(form));
    }, [setErrors, form]);

    return (
        <div className={style.formContainerMain}>

            <Navbar />

            <h1 className={style.formTitle}>Crea tu pokemon</h1>

            <form onSubmit={submitHandler} className={style.formContainer}>
                <div className={style.formDivInput}>
                    <label htmlFor="name" className={style.formLabel}>Nombre</label>
                    <input type="text" name="name" placeholder="Nombre" value={form.name} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.name && focus.name && <p className={style.formError}>{errors.name}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="image" className={style.formLabel}>Imagen</label>
                    <input type="text" name="image" placeholder="Imagen (url)" value={form.image} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.image && focus.image && <p className={style.formError}>{errors.image}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="hp" className={style.formLabel}>Vida</label>
                    <input type="number" name="hp" placeholder="Vida" value={form.hp} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.hp && focus.hp && <p className={style.formError}>{errors.hp}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="attack" className={style.formLabel}>Ataque</label>
                    <input type="number" name="attack" placeholder="Ataque" value={form.attack} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.attack && focus.attack && <p className={style.formError}>{errors.attack}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="defense" className={style.formLabel}>Defensa</label>
                    <input type="number" name="defense" placeholder="Defensa" value={form.defense} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.defense && focus.defense &&<p className={style.formError}>{errors.defense}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="speed" className={style.formLabel}>Velocidad</label>
                    <input type="number" name="speed" placeholder="Velocidad" value={form.speed} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.speed && focus.speed &&<p className={style.formError}>{errors.speed}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="height" className={style.formLabel}>Altura</label>
                    <input type="number" name="height" placeholder="Altura" value={form.height} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.height && focus.height && <p className={style.formError}>{errors.height}</p>}

                <div className={style.formDivInput}>
                    <label htmlFor="weight" className={style.formLabel}>Peso</label>
                    <input type="number" name="weight" placeholder="Peso" value={form.weight} onChange={changeInputHandler} className={style.formInput} onFocus={focusHandler} />
                </div>
                {errors.weight && focus.weight && <p className={style.formError}>{errors.weight}</p>}

                <h2 className={style.typeTitle}>Elige hasta 2 tipos para tu pokemon</h2>

                <div className={style.formDivTypes}>
                    {typesApi.map((type, index) => {
                        return (
                            <div key={index} className={style.formDivCheckbox}>
                                <label htmlFor={type.name} className={style.labelCheckbox}>{type.name[0].toUpperCase() + type.name.substring(1)}</label>
                                <input type="checkbox" name={type.name} value={type.id} onChange={changeInputHandler} className={style.inputCheckbox} />
                            </div>
                        );
                    })}
                </div>
                {errors.types && <p className={style.formError}>{errors.types}</p>}

                <button type="submit" className={style.buttonForm} disabled={
                    errors.name || errors.image || errors.hp || errors.attack || errors.defense || 
                    errors.types || form.typesId.length < 1 ? true : false 
                }>CREAR</button>

            </form>

        </div>
    );
};

export default Form;