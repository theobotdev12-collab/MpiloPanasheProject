
# ==============================
# Helper Functions
# ==============================

def predict_food(img):
    img = img.resize((128, 128))
    img_array = np.array(img) / 255.0
    img_array = np.expand_dims(img_array, axis=0)

    predictions = model.predict(img_array, verbose=0)
    index = int(np.argmax(predictions))
    confidence = float(np.max(predictions))

    return class_names[index], confidence


def get_nutrients(food_name):
    row = nutrients_df[nutrients_df["food"] == food_name]

    if row.empty:
        return None

    return {
        "potassium": int(row["potassium_mg"].values[0]),
        "phosphorus": int(row["phosphorus_mg"].values[0]),
        "sodium": int(row["sodium_mg"].values[0])
    }


def kidney_friendly(nutrients):
    issues = []

    if nutrients["potassium"] > 300:
        issues.append("High potassium")
    if nutrients["phosphorus"] > 200:
        issues.append("High phosphorus")
    if nutrients["sodium"] > 200:
        issues.append("High sodium")

    if issues:
        return "Not kidney friendly", issues
    else:
        return "Kidney friendly", []


# ==============================
# Routes
# ==============================

@app.route("/")
def home():
    return jsonify({"message": "Mpilo Panashe Flask API running"})


@app.route("/health")
def health():
    return jsonify({"status": "ok"})


@app.route("/predict", methods=["GET"])
def predict():
    try:
        print("Request received")

        # 🔥 Accept BOTH 'file' and 'image'
        file = request.files.get("file") or request.files.get("image")

        if file is None:
            return jsonify({"error": "No file uploaded"}), 400

        print("File name:", file.filename)

        # Read image from memory
        img_bytes = file.read()
        img = Image.open(io.BytesIO(img_bytes)).convert("RGB")

        # Prediction
        food, confidence = predict_food(img)
        nutrients = get_nutrients(food)

        if nutrients is None:
            return jsonify({"error": "Nutrient data not found"}), 500

        verdict, issues = kidney_friendly(nutrients)

        return jsonify({
            "food": food,
            "confidence": confidence,
            "nutrients": nutrients,
            "kidney_verdict": verdict,
            "issues": issues
        })

    except Exception as e:
        print("ERROR:", str(e))
        return jsonify({"error": str(e)}), 500

