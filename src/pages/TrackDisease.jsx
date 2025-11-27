import React, { useState } from "react";
import Chatbot from "../Components/Chatbot";

export default function TrackDisease() {
  const [form, setForm] = useState({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: ""
  });

  const [errors, setErrors] = useState({});
  const [risk, setRisk] = useState(null);
  const [binary, setBinary] = useState(null);

  const limits = {
    age: [1,120],
    cp: [0,3],
    trestbps: [50,250],
    chol: [80,600],
    fbs: [0,1],
    restecg: [0,2],
    thalach: [40,250],
    exang: [0,1],
    oldpeak: [0,6],
    slope: [0,2],
    ca: [0,4],
    thal: [1,7]
  };

  const hints = {
    age: "Age of patient (1–120)",
    sex: "Male or Female",
    cp: "Chest Pain (0–3)",
    trestbps: "Resting BP (50–250)",
    chol: "Cholesterol (80–600)",
    fbs: "Fasting Blood Sugar (0 or 1)",
    restecg: "Resting ECG (0–2)",
    thalach: "Max Heart Rate (40–250)",
    exang: "Exercise Induced Angina (0 or 1)",
    oldpeak: "ST Depression (0.0–6.0)",
    slope: "Slope (0–2)",
    ca: "Major Vessels Colored (0–4)",
    thal: "Thalassemia (1–7)"
  };

  const validateField = (name, value) => {
    if (name === "sex") return "";
    const num = Number(value);
    const [min, max] = limits[name];
    if (value === "") return "Required field";
    if (num < min) return `Value must be ≥ ${min}`;
    if (num > max) return `Value must be ≤ ${max}`;
    return "";
  };

  const handleNumberInput = (e) => {
    const { name, value } = e.target;

    // ONLY allow digits and one decimal point
    if (!/^\d*\.?\d*$/.test(value)) return;

    setForm({ ...form, [name]: value });

    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handlePredict = async () => {
    let tempErrors = {};
    let hasError = false;

    Object.keys(form).forEach((field) => {
      if (field === "sex") return;
      const error = validateField(field, form[field]);
      if (error) hasError = true;
      tempErrors[field] = error;
    });

    setErrors(tempErrors);

    if (hasError) {
      alert("Fix the highlighted errors before predicting.");
      return;
    }

    const cleanedData = {
      ...form,
      sex: form.sex === "male" ? 1 : 0,
    };

    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/heart/predict`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        Object.fromEntries(
          Object.entries(cleanedData).map(([k, v]) => [k, Number(v)])
        )
      ),
    });

    const data = await response.json();

    let risk_percent = 0;
    let prediction = 0;

    if (typeof data.prediction === "string") {
      try {
        const parsed = JSON.parse(data.prediction);
        risk_percent = parsed.risk_percent;
        prediction = parsed.prediction;
      } catch {}
    } else if (typeof data.risk_percent === "number") {
      risk_percent = data.risk_percent;
      prediction = data.prediction;
    }

    setRisk(!isNaN(risk_percent) ? risk_percent : 0);
    setBinary(Number(prediction));
  };

  return (
    <div className="py-28 px-6 max-w-5xl mx-auto">
      <Chatbot></Chatbot>

      <h1 className="text-4xl font-bold text-center text-[#1E2B6C] mb-4">
        Heart Disease Risk Predictor
      </h1>

      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Enter your health details to see your 
        <b> heart disease risk percentage</b>.
      </p>

      <div className="bg-white shadow-lg p-8 rounded-2xl border border-gray-200">
        <h2 className="text-2xl font-semibold text-[#1E2B6C] mb-6">
          Enter Patient Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* SEX SELECT */}
          <div className="flex flex-col">
            <label className="font-semibold mb-1 text-gray-700">Sex</label>
            <select
              name="sex"
              value={form.sex}
              onChange={(e) => setForm({ ...form, sex: e.target.value })}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="male">Male (1)</option>
              <option value="female">Female (0)</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">{hints.sex}</p>
          </div>

          {/* NUMERIC FIELDS */}
          {Object.keys(form)
            .filter((f) => f !== "sex")
            .map((field) => (
              <div key={field} className="flex flex-col">
                <label className="font-semibold mb-1 text-gray-700">
                  {field}
                </label>

                <input
                  type="text"
                  name={field}
                  value={form[field]}
                  onChange={handleNumberInput}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                      e.preventDefault();
                    }
                  }}
                  className={`w-full border px-3 py-2 rounded-md 
                    ${errors[field] ? "border-red-500" : "border-gray-300"}
                  `}
                  placeholder={hints[field]}
                />

                {errors[field] ? (
                  <p className="text-xs text-red-500 mt-1">{errors[field]}</p>
                ) : (
                  <p className="text-xs text-gray-500 mt-1">{hints[field]}</p>
                )}
              </div>
            ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handlePredict}
            className="bg-[#1E2B6C] text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-900 transition-all shadow-md"
          >
            Predict Risk
          </button>
        </div>
      </div>

      {/* RESULT CARD */}
      {risk !== null && (
        <div
          className={`mt-10 text-center p-8 rounded-2xl shadow-lg border ${
            binary === 1
              ? "bg-red-100 border-red-300"
              : "bg-green-100 border-green-300"
          }`}
        >
          <h2
            className={`text-3xl font-bold ${
              binary === 1 ? "text-red-700" : "text-green-700"
            }`}
          >
            {binary === 1 ? "⚠ High Risk Detected" : "🟢 Low Risk"}
          </h2>

          <p className="text-2xl font-semibold mt-4">
            Risk Percentage:{" "}
            <span className="font-bold">{Number(risk).toFixed(2)}%</span>
          </p>

          <p className="mt-3 text-gray-600 text-lg">
            {binary === 1
              ? "Please consult a cardiologist."
              : "Your heart health looks good."}
          </p>
        </div>
      )}
    </div>
  );
}
