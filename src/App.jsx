import { useState } from "react";

const semesters = [
  {
    name: "Primer Año - Semestre I",
    courses: [
      { code: "QFAR1101", name: "Matemáticas I", prerequisites: [] },
      { code: "QFAR1102", name: "Química I", prerequisites: [] },
      { code: "QFAR1103", name: "Técnicas Básicas de Laboratorio", prerequisites: [] },
      { code: "QFAR1104", name: "Biología Celular y Molecular", prerequisites: [] },
      { code: "QFAR1105", name: "Introducción a las Ciencias Farmacéuticas", prerequisites: [] },
      { code: "CES1144", name: "Salud, Bienestar y Sociedad", prerequisites: [] },
    ],
  },
  {
    name: "Primer Año - Semestre II",
    courses: [
      { code: "QFAR1106", name: "Matemáticas II", prerequisites: ["QFAR1101"] },
      { code: "QFAR1107", name: "Química II", prerequisites: ["QFAR1102", "QFAR1103"] },
      { code: "QFAR1109", name: "Fisiología y Patología I", prerequisites: ["QFAR1104"] },
      { code: "CES1145", name: "Salud Pública", prerequisites: ["CES1144"] },
      { code: "ELAC", name: "Electivo Antropológico Cristiano", prerequisites: [] },
      { code: "QFAR1110", name: "Anatomía e Histología", prerequisites: [] },
    ],
  },
  {
    name: "Segundo Año - Semestre III",
    courses: [
      { code: "QFAR1111", name: "Química Orgánica I", prerequisites: ["QFAR1107"] },
      { code: "QFAR1112", name: "Botánica Farmacéutica", prerequisites: [] },
      { code: "QFAR1108", name: "Biofísica", prerequisites: [] },
      { code: "QFAR1113", name: "Fisiología y Patología II", prerequisites: ["QFAR1109"] },
      { code: "CES1146", name: "Salud Familiar Comunitaria e Intercultural I", prerequisites: ["CES1145"] },
      { code: "EL1", name: "Electivo Diversidad I", prerequisites: [] },
    ],
  },
  {
    name: "Segundo Año - Semestre IV",
    courses: [
      { code: "QFAR1115", name: "Química Orgánica II", prerequisites: ["QFAR1111"] },
      { code: "QFAR1116", name: "Química Analítica", prerequisites: ["QFAR1107"] },
      { code: "QFAR1117", name: "Bioquímica General", prerequisites: ["QFAR1111"] },
      { code: "CES1147", name: "Salud Familiar Comunitaria e Intercultural II", prerequisites: ["CES1146"] },
      { code: "QFAR1114", name: "Comunicación en salud", prerequisites: [] },
      { code: "QFAR1118", name: "Fisicoquímica", prerequisites: ["QFAR1107", "QFAR1106"] },
    ],
  },
  {
    name: "Tercer Año - Semestre V",
    courses: [
      { code: "QFAR1119", name: "Farmacología General", prerequisites: ["QFAR1115"] },
      { code: "QFAR1120", name: "Microbiología", prerequisites: ["QFAR1102"] },
      { code: "QFAR1121", name: "Análisis Instrumental", prerequisites: [] },
      { code: "QFAR1122", name: "Farmacognosia", prerequisites: ["QFAR1112", "QFAR1115"] },
      { code: "CES1158", name: "Práctica Comunitaria Interdisciplinaria", prerequisites: ["CES1147"] },
      { code: "EL2", name: "Electivo Diversidad II", prerequisites: [] },
    ],
  },
  {
    name: "Tercer Año - Semestre VI",
    courses: [
      { code: "QFAR1123", name: "Farmacología de Sistemas I", prerequisites: ["QFAR1113", "QFAR1119"] },
      { code: "QFAR1124", name: "Bioquímica Clínica", prerequisites: ["QFAR1117", "QFAR1116"] },
      { code: "QFAR1125", name: "Farmacoquímica I", prerequisites: ["QFAR1119"] },
      { code: "QFAR1126", name: "Inmunología", prerequisites: ["QFAR1113", "QFAR1119"] },
      { code: "QFAR1127", name: "Bioestadística", prerequisites: ["QFAR1106"] },
      { code: "QFAR1131", name: "Administración y gestión farmacéutica", prerequisites: ["QFAR1114", "QFAR1119", "QFAR1121", "QFAR1122"] },
    ],
  },
  {
    name: "Cuarto Año - Semestre VII",
    courses: [
      { code: "QFAR1128", name: "Farmacología de Sistemas II", prerequisites: ["QFAR1123"] },
      { code: "QFAR1129", name: "Tecnología Farmacéutica I", prerequisites: ["QFAR1116"] },
      { code: "QFAR1130", name: "Farmacoquímica II", prerequisites: ["QFAR1125"] },
      { code: "QFAR1145", name: "Electivo de Especialidad I", prerequisites: ["QFAR1131", "QFAR1125"] },
      { code: "QFAR1122-2", name: "Práctica Preliminar", prerequisites: ["QFAR1131", "QFAR1125", "QFAR1123", "QFAR1124"] },
      { code: "ELTE", name: "Electivo Teológico", prerequisites: [] },
    ],
  },
  {
    name: "Cuarto Año - Semestre VIII",
    courses: [
      { code: "QFAR1133", name: "Toxicología", prerequisites: ["QFAR1128", "QFAR1121"] },
      { code: "QFAR1134", name: "Tecnología Farmacéutica II", prerequisites: ["QFAR1129"] },
      { code: "QFAR1135", name: "Atención Farmacéutica", prerequisites: ["QFAR1124", "QFAR1128"] },
      { code: "QFAR1140", name: "Cosmética Farmacéutica", prerequisites: ["QFAR1134"] },
      { code: "QFAR1136", name: "Farmacia Comunitaria y Asistencial", prerequisites: ["QFAR1128", "QFAR1129"] },
      { code: "QFAR1137", name: "Seminarios de Investigación", prerequisites: ["QFAR1132"] },
      { code: "QFAR1138", name: "Legislación Farmacéutica", prerequisites: ["QFAR1132", "QFAR1128", "QFAR1129"] },
    ],
  },
  {
    name: "Quinto Año - Semestre IX",
    courses: [
      { code: "QFAR1146", name: "Electivo Interprofesional", prerequisites: ["QFAR1136"] },
      { code: "QFAR1139", name: "Biofarmacia", prerequisites: ["QFAR1134"] },
      { code: "QFAR1140", name: "Cosmética Farmacéutica", prerequisites: ["QFAR1134"] },
      { code: "QFAR1141", name: "Farmacia Clínica", prerequisites: ["QFAR1130", "QFAR1135"] },
      { code: "IET1433", name: "Ética Profesional", prerequisites: [] },
      { code: "EL3", name: "Electivo Diversidad III", prerequisites: [] },
    ],
  },
  {
    name: "Quinto Año - Semestre X",
    courses: [
      { code: "QFAR1142", name: "Práctica Profesional", prerequisites: ["QFAR1138", "QFAR1141", "QFAR1135", "QFAR1139", "QFAR1136", "QFAR1133"] },
      { code: "QFAR1143", name: "Actividad de Titulación", prerequisites: ["QFAR1137"] },
      { code: "QFAR1144", name: "Electivo de Especialidad II", prerequisites: ["QFAR1145"] },
    ],
  },
];

export default function App() {
  const [approved, setApproved] = useState([]);

  const toggleApproved = (code) => {
    setApproved((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const isUnlocked = (course) =>
    course.prerequisites.every((pre) => approved.includes(pre));

  return (
    <div className="min-h-screen bg-pink-50 p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-pink-700">
        Malla Curricular Química y Farmacia
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {semesters.map((semester) => (
          <div
            key={semester.name}
            className="bg-white rounded-2xl shadow p-6 border border-pink-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-pink-600">
              {semester.name}
            </h2>
            <div className="flex flex-col gap-3">
              {semester.courses.map((course) => {
                const unlocked = isUnlocked(course);
                const checked = approved.includes(course.code);
                return (
                  <button
                    key={course.code}
                    disabled={!unlocked}
                    onClick={() => unlocked && toggleApproved(course.code)}
                    className={`w-full text-left p-3 rounded-xl border transition
                      ${
                        checked
                          ? "bg-pink-300 border-pink-700"
                          : unlocked
                          ? "bg-white border-pink-300 hover:bg-pink-100 cursor-pointer"
                          : "bg-pink-100 border-pink-200 text-pink-400 cursor-not-allowed"
                      }
                    `}
                  >
                    <strong>{course.code}</strong> – {course.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
