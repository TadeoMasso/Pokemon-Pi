import React from "react";
import { Link } from "react-router-dom";
import styles from "./landing-page.module.css";
import photo from "../../Components/imagenes/totodile.png"
import photo2 from "../../Components/imagenes/charizard.png"
import photo3 from "../../Components/imagenes/pikachu.png"
import Head from "../../Components/Head";


export default function LandingPage() {
  return (
    <>
    <Head title="Welcome" />
    <div className={styles.divLand}>
      
      <h1 
      >Centro Poke<span className={styles.uno}>mon Lo De Tato</span></h1>
      <Link to="/home">
        <button>
          Ingresar
        </button>
      </Link>
      <div>
      <img src={photo} alt="Tadeo" className={styles.fotoIntro} />
      <img src={photo2} alt="Valen" className={styles.fotoIntro2}/>
      <img src={photo3} alt="Lucas" className={styles.fotoIntro3} />
      </div>
      
      
    </div>
    </>
  );
}
