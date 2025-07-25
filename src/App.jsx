import React, { useState } from "react";

const SEMESTRES = [
  {
    titulo: "PRIMER AÑO - Semestre I",
    ramos: [
      "QFAR1101 – Matemáticas I",
      "QFAR1102 – Química I",
      "QFAR1103 – Técnicas Básicas de Laboratorio",
      "QFAR1104 – Biología Celular y Molecular",
      "QFAR1105 – Introducción a las Ciencias Farmacéuticas",
      "CES1144 – Salud, Bienestar y Sociedad",
    ],
  },
  {
    titulo: "PRIMER AÑO - Semestre II",
    ramos: [
      "QFAR1106 – Matemáticas II",
      "QFAR1107 – Química II",
      "QFAR1108 – Física General",
      "QFAR1109 – Anatomía y Fisiología",
      "QFAR1110 – Desarrollo Personal y Comunicación Efectiva",
    ],
  },
  {
    titulo: "SEGUNDO AÑO - Semestre III",
    ramos: [
      "QFAR1201 – Química Orgánica I",
      "QFAR1202 – Laboratorio de Química Orgánica I",
      "QFAR1203 – Bioquímica I",
      "QFAR1204 – Laboratorio de Bioquímica I",
      "QFAR1205 – Fisiopatología I",
      "QFAR1206 – Farmacología I",
    ],
  },
  {
    titulo: "SEGUNDO AÑO - Semestre IV",
    ramos: [
      "QFAR1207 – Química Orgánica II",
      "QFAR1208 – Laboratorio de Química Orgánica II",
      "QFAR1209 – Bioquímica II",
      "QFAR1210 – Laboratorio de Bioquímica II",
      "QFAR1211 – Fisiopatología II",
      "QFAR1212 – Farmacología II",
    ],
  },
  {
    titulo: "TERCER AÑO - Semestre V",
    ramos: [
      "QFAR1301 – Microbiología",
      "QFAR1302 – Laboratorio de Microbiología",
      "QFAR1303 – Inmunología",
      "QFAR1304 – Farmacognosia",
      "QFAR1305 – Tecnología Farmacéutica I",
    ],
  },
  {
    titulo: "TERCER AÑO - Semestre VI",
    ramos: [
      "QFAR1306 – Parasitología",
      "QFAR1307 – Laboratorio de Parasitología",
      "QFAR1308 – Farmacología Clínica",
      "QFAR1309 – Tecnología Farmacéutica II",
      "QFAR1310 – Control de Calidad de Medicamentos",
    ],
  },
  {
    titulo: "CUARTO AÑO - Semestre VII",
    ramos: [
      "QFAR1401 – Legislación Farmacéutica",
      "QFAR1402 – Toxicología",
      "QFAR1403 – Gestión Farmacéutica",
      "QFAR1404 – Tecnología Farmacéutica III",
      "QFAR1405 – Farmacia Comunitaria",
    ],
  },
  {
    titulo: "CUARTO AÑO - Semestre VIII",
    ramos: [
      "QFAR1406 – Biofarmacia y Farmacocinética",
      "QFAR1407 – Farmacia Hospitalaria",
      "QFAR1408 – Clínica Farmacéutica",
      "QFAR1409 – Evaluación de Productos Farmacéuticos",
      "QFAR1410 – Ética Profesional",
    ],
  },
  {
    titulo: "QUINTO AÑO - Semestre IX",
    ramos: [
      "QFAR1501 – Práctica Profesional I",
      "QFAR1502 – Seminario de Integración",
      "QFAR1503 – Electivo Profesional I",
    ],
  },
  {
    titulo: "QUINTO AÑO - Semestre X",
    ramos: [
      "QFAR1504 – Práctica Profesional II",
      "QFAR1505 – Proyecto de Título",
      "QFAR1506 – Electivo Profesional II",
    ],
  },
];

export default function App() {
  const [completados, setCompletados] = useState({});

  const toggleRamo = (nombre) => {
    setCompletados((prev) => ({
      ...prev,
      [nombre]: !prev[nombre],
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white p-6 font-sans">
      <h1 className="text-4xl font-bold text-center text-pink-700 mb-10">
        Malla Curricular – Química y Farmacia
      </h1>

      {SEMESTRES.map((semestre, i) => (
        <div key={i} className="mb-8">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            {semestre.titulo}
          </h2>
          <ul className="space-y-2">
            {semestre.ramos.map((ramo) => (
              <li
                key={ramo}
                className={`cursor-pointer border rounded px-4 py-2 transition ${
                  completados[ramo]
                    ? "bg-green-100 line-through text-gray-500"
                    : "bg-white hover:bg-pink-100"
                }`}
                onClick={() => toggleRamo(ramo)}
              >
                {ramo}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
