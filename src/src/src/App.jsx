import React, { useState } from "react";

const ramos = {
  // PRIMER AÑO - Semestre I
  QFAR1101: { name: "Matemáticas I", requisitos: [] },
  QFAR1102: { name: "Química I", requisitos: [] },
  QFAR1103: { name: "Técnicas Básicas de Laboratorio", requisitos: [] },
  QFAR1104: { name: "Biología Celular y Molecular", requisitos: [] },
  QFAR1105: { name: "Introducción a las Ciencias Farmacéuticas", requisitos: [] },
  CES1144: { name: "Salud, Bienestar y Sociedad", requisitos: [] },

  // PRIMER AÑO - Semestre II
  QFAR1106: { name: "Matemáticas II", requisitos: [] },
  QFAR1107: { name: "Química II", requisitos: ["QFAR1102", "QFAR1103"] },
  QFAR1109: { name: "Fisiología y Patología I", requisitos: ["QFAR1104"] },
  CES1145: { name: "Salud Pública", requisitos: ["CES1144"] },
  ELAC: { name: "Electivo Antrológico Cristiano ELAC", requisitos: [] },
  QFAR1110: { name: "Anatomía e Histología", requisitos: [] },

  // SEGUNDO AÑO - Semestre III
  QFAR1111: { name: "Química Orgánica I", requisitos: ["QFAR1107"] },
  QFAR1112: { name: "Botánica Farmacéutica", requisitos: [] },
  QFAR1108: { name: "Biofísica", requisitos: [] },
  QFAR1113: { name: "Fisiología y Patología II", requisitos: ["QFAR1109"] },
  CES1146: { name: "Salud Familiar Comunitaria e Intercultural I", requisitos: ["CES1145"] },
  EL1: { name: "Electivo Diversidad I EL1", requisitos: [] },

  // SEGUNDO AÑO - Semestre IV
  QFAR1115: { name: "Química Orgánica II", requisitos: ["QFAR1111"] },
  QFAR1116: { name: "Química Analítica", requisitos: ["QFAR1107"] },
  QFAR1117: { name: "Bioquímica General", requisitos: ["QFAR1111"] },
  CES1147: { name: "Salud Familiar Comunitaria e Intercultural II", requisitos: ["CES1146"] },
  QFAR1114: { name: "Comunicación en Salud", requisitos: [] },
  QFAR1118: { name: "Fisicoquímica", requisitos: ["QFAR1107", "QFAR1106"] },

  // TERCER AÑO - Semestre V
  QFAR1119: { name: "Farmacología General", requisitos: ["QFAR1115"] },
  QFAR1120: { name: "Microbiología", requisitos: ["QFAR1102"] },
  QFAR1121: { name: "Análisis Instrumental", requisitos: [] },
  QFAR1122: { name: "Farmacognosia", requisitos: ["QFAR1112", "QFAR1115"] },
  CES1158: { name: "Práctica Comunitaria Interdisciplinaria", requisitos: ["CES1147"] },
  EL2: { name: "Electivo Diversidad II EL2", requisitos: [] },

  // TERCER AÑO - Semestre VI
  QFAR1123: { name: "Farmacología de Sistemas I", requisitos: ["QFAR1113", "QFAR1119"] },
  QFAR1124: { name: "Bioquímica Clínica", requisitos: ["QFAR1117", "QFAR1116"] },
  QFAR1125: { name: "Farmacoquímica I", requisitos: ["QFAR1119"] },
  QFAR1126: { name: "Inmunología", requisitos: ["QFAR1113", "QFAR1119"] },
  QFAR1127: { name: "Bioestadística", requisitos: ["QFAR1106"] },
  QFAR1131: { name: "Administración y Gestión Farmacéutica", requisitos: ["QFAR1114", "QFAR1119", "QFAR1121", "QFAR1122"] },

  // CUARTO AÑO - Semestre VII
  QFAR1128: { name: "Farmacología de Sistemas II", requisitos: ["QFAR1123"] },
  QFAR1129: { name: "Tecnología Farmacéutica I", requisitos: ["QFAR1116"] },
  QFAR1130: { name: "Farmacoquímica II", requisitos: ["QFAR1125"] },
  QFAR1145: { name: "Electivo de Especialidad I", requisitos: ["QFAR1131", "QFAR1125"] },
  PRACTICA_PRELIMINAR: { name: "Práctica Preliminar", requisitos: ["QFAR1131", "QFAR1125", "QFAR1123", "QFAR1124"] },
  ELTE: { name: "Electivo Teológico ELTE", requisitos: [] },

  // CUARTO AÑO - Semestre VIII
  QFAR1133: { name: "Toxicología", requisitos: ["QFAR1128", "QFAR1121"] },
  QFAR1134: { name: "Tecnología Farmacéutica II", requisitos: ["QFAR1129"] },
  QFAR1135: { name: "Atención Farmacéutica", requisitos: ["QFAR1124", "QFAR1128"] },
  QFAR1140: { name: "Cosmética Farmacéutica", requisitos: ["QFAR1134"] },
  QFAR1136: { name: "Farmacia Comunitaria y Asistencial", requisitos: ["QFAR1128", "QFAR1129"] },
  QFAR1137: { name: "Seminarios de Investigación", requisitos: ["QFAR1132"] },
  QFAR1138: { name: "Legislación Farmacéutica", requisitos: ["QFAR1132", "QFAR1128", "QFAR1129"] },

  // QUINTO AÑO - Semestre IX
  QFAR1146: { name: "Electivo Interprofesional", requisitos: ["QFAR1136"] },
  QFAR1139: { name: "Biofarmacia", requisitos: ["QFAR1134"] },
  QFAR1140: { name: "Cosmética Farmacéutica", requisitos: ["QFAR1134"] },
  QFAR1141: { name: "Farmacia Clínica", requisitos: ["QFAR1130", "QFAR1135"] },
  IET1433: { name: "Ética Profesional", requisitos: [] },
  EL3: { name: "Electivo Diversidad III EL3", requisitos: [] },

  // QUINTO AÑO - Semestre X
  QFAR1142: { name: "Práctica Profesional", requisitos: ["QFAR1138", "QFAR1141", "QFAR1135", "QFAR1139", "QFAR1136", "QFAR1133"] },
  QFAR1143: { name: "Actividad de Titulación", requisitos: ["QFAR1137"] },
  QFAR1144: { name: "Electivo de Especialidad II", requisitos: ["QFAR1145"] },
};

export default function App() {
  const [aprobados, setAprobados] = useState({});

  const toggleAprobado = (codigo) => {
    setAprobados((prev) => {
      const nuevoEstado = { ...prev };

      if (nuevoEstado[codigo]) {
        delete nuevoEstado[codigo];
      } else {
        const requisitos = ramos[codigo].requisitos || [];
        for (let req of requisitos) {
          if (!nuevoEstado[req]) {
            alert(
              `No puedes aprobar "${ramos[codigo].name}" porque falta aprobar "${ramos[req].name}"`
            );
            return prev;
          }
        }
        nuevoEstado[codigo] = true;
      }
      return nuevoEstado;
    });
  };

  const estaDesbloqueado = (codigo) => {
    const requisitos = ramos[codigo].requisitos || [];
    return requisitos.every((req) => aprobados[req]);
  };

  return (
    <div className="min-h-screen bg-pink-50 p-6 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-pink-700 text-center">
        Malla Curricular Química y Farmacia
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {Object.entries(ramos).map(([codigo, ramo]) => {
          const aprobado = !!aprobados[codigo];
          const desbloqueado = estaDesbloqueado(codigo);

          return (
            <button
              key={codigo}
              onClick={() => toggleAprobado(codigo)}
              disabled={!desbloqueado && !aprobado}
              className={`p-4 rounded-lg shadow font-semibold text-center
                transition-colors duration-300
                ${
                  aprobado
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : desbloqueado
                    ? "bg-pink-300 text-pink-900 hover:bg-pink-400"
                    : "bg-pink-200 text-pink-400 cursor-not-allowed opacity-60"
                }`}
              title={
                ramo.name +
                (ramo.requisitos.length > 0
                  ? "\nRequisitos:\n" + ramo.requisitos.map((r) => ramos[r]?.name || r).join(", ")
                  : "")
              }
            >
              <div className="text-sm font-mono">{codigo}</div>
              <div className="mt-1">{ramo.name}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
