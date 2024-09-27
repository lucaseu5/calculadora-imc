import React, { useState } from 'react';
import styles from './CalculadoraIMC.module.css'


const CalculadoraIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        const alturaEmMetros = altura / 100; // Convertendo altura para metros
        const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
        setImc(imcCalculado.toFixed(2));

        // Classificação do IMC
        if (imcCalculado < 18.5) {
            setClassificacao('Abaixo do peso');
        } else if (imcCalculado < 24.9) {
            setClassificacao('Peso normal');
        } else if (imcCalculado < 29.9) {
            setClassificacao('Sobrepeso');
        } else {
            setClassificacao('Obesidade');
        }
    };

    return (
        <div className={styles.form}>
            <div className={styles.option}>
                <label>
                    Peso (kg):
                    <input
                        type="number"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                    />
                </label>
            </div>
            <div className={styles.option}>
                <label>
                    Altura (cm):
                    <input
                        type="number"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={calcularIMC}>Calcular IMC</button>
            {imc && (
                <div>
                    <h2>Seu IMC é: {imc}</h2>
                    <h3>Classificação: {classificacao}</h3>
                </div>
            )}
        </div>
    );
};

export default CalculadoraIMC;