import React, { useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:5000";

interface PredictionResult {
  food: string;
  confidence: number;
  nutrients: {
    potassium: number;
    phosphorus: number;
    sodium: number;
  };
  kidney_verdict: string;
  issues: string[];
}

const FoodAnalysis: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
      setError("");
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setError("Please select an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setLoading(true);
      setError("");
      setResult(null);

      const response = await axios.post<PredictionResult>(
        `${API_BASE_URL}/predict`,
        formData,
        {
          timeout: 15000,
        }
      );

      setResult(response.data);

    } catch (err: any) {
      console.error("Upload error:", err);

      if (err.response) {
        setError(err.response.data.error || "Server error occurred.");
      } else if (err.code === "ECONNABORTED") {
        setError("Request timed out. Please try again.");
      } else {
        setError("Server not responding. Make sure Flask is running.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>🍽️ Kidney Food Nutrient Analysis</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={loading}
      />

      {preview && (
        <div style={styles.previewContainer}>
          <img src={preview} alt="Preview" style={styles.image} />
        </div>
      )}

      <button
        onClick={handleUpload}
        style={styles.button}
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {result && (
        <div style={styles.resultBox}>
          <h3>Prediction Result:</h3>

          <p><strong>Food:</strong> {result.food}</p>
          <p>
            <strong>Confidence:</strong>{" "}
            {(result.confidence * 100).toFixed(2)}%
          </p>

          <h4>Nutrient Levels:</h4>
          <p><strong>Potassium:</strong> {result.nutrients.potassium} mg</p>
          <p><strong>Phosphorus:</strong> {result.nutrients.phosphorus} mg</p>
          <p><strong>Sodium:</strong> {result.nutrients.sodium} mg</p>

          <h4>Kidney Verdict:</h4>
          <p>{result.kidney_verdict}</p>

          {result.issues.length > 0 && (
            <div>
              <strong>Issues:</strong>
              <ul>
                {result.issues.map((issue, index) => (
                  <li key={index}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center" as const,
    marginTop: "40px",
  },
  previewContainer: {
    marginTop: "20px",
  },
  image: {
    width: "250px",
    height: "auto",
    borderRadius: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  resultBox: {
    marginTop: "30px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    display: "inline-block",
    textAlign: "left" as const,
  },
  error: {
    color: "red",
    marginTop: "15px",
  },
};

export default FoodAnalysis;