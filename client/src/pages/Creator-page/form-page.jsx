import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemons } from "../../redux/actions/pokeActions";
import { getTypes } from "../../redux/actions/pokeActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./form.module.css";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Se requiere Name";
  } else if (!input.hp) {
    errors.hp = "Se requiere Hp";
  } else if (!input.attack) {
    errors.hp = "Se requiere Attack";
  } else if (!input.defense) {
    errors.hp = "Se requiere Defense";
  } else if (!input.speed) {
    errors.hp = "Se requiere Spedd";
  } else if (!input.height) {
    errors.hp = "Se requiere Height";
  } else if (!input.weight) {
    errors.hp = "Se requiere Weight";
  } else if (!input.image) {
    errors.hp = "Se requiere Imagen";
  }
  return errors;
}

export default function PokeForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const types = useSelector((state) => state.types);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });
  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
    dispatch(postPokemons(input));
    alert("Felicidades Pokemon Creado!! :D");
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    history.push("/home");
  }
  function handleDelete(el) {
    setInput({
      ...input,
      types: input.types.filter((ty) => ty !== el),
    });
  }
  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <body>
      <Link to="/home">
        <button>Volver</button>
      </Link>
      <section className={styles.formP}>
        <div className={styles.form}>
          <form onSubmit={(e) => handleSubmit(e)} className={styles.pokemon}>
            <header className={styles.header}>
              <span>
                <p>Creador</p>
              </span>
            </header>
            <div>
              <label className={styles.espacio}>Name:</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}>Image</label>
              <input
                type="text"
                value={input.image}
                name="image"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}>Hp</label>
              <input
                type="text"
                value={input.hp}
                name="hp"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}> Attack</label>
              <input
                type="text"
                value={input.attack}
                name="attack"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}>Defense</label>
              <input
                type="text"
                value={input.defense}
                name="defense"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}>Speed</label>
              <input
                type="text"
                value={input.speed}
                name="speed"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}>Height</label>
              <input
                type="text"
                value={input.height}
                name="height"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className={styles.espacio}>Weight</label>
              <input
                type="text"
                value={input.weight}
                name="weight"
                onChange={handleChange}
              />
            </div>
            <select
              className={styles.espacio}
              onChange={(e) => handleSelect(e)}
            >
              {types.map((ty) => (
                <option value={ty.name}>{ty.name}</option>
              ))}
            </select>
            <div>
              <ul>
                <li>{input.types.map((el) => el + ",")}</li>
              </ul>
            </div>

            <button type="submit">Crear Bicho</button>
          </form>
        </div>
      </section>
      {input.types.map((el) => (
        <div className="divty">
          <p>{el}</p>
          <button className="botonx" onClick={() => handleDelete(el)}>
            X
          </button>
        </div>
      ))}
    </body>
  );
}
