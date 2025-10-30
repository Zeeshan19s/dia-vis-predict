import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const PredictionForm: React.FC = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigree: "",
    age: "",
  });

  const [result, setResult] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { glucose, bmi, age } = formData;
    const risk =
      Number(glucose) > 140 || Number(bmi) > 30 || Number(age) > 40
        ? "High Risk"
        : "Low Risk";
    setResult(risk);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <Card className="w-full max-w-xl p-6 shadow-lg">
        <CardHeader>
          <h2 className="text-2xl font-semibold text-center text-blue-600">
            Diabetes Risk Prediction
          </h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {Object.keys(formData).map((key) => (
              <div key={key}>
                <label className="block capitalize mb-1 font-medium text-gray-700">
                  {key}
                </label>
                <Input
                  type="number"
                  name={key}
                  value={formData[key as keyof typeof formData]}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}
            <Button type="submit" className="w-full mt-4">
              Predict Risk
            </Button>
          </form>
          {result && (
            <div
              className={`mt-4 text-center font-bold text-lg ${
                result === "High Risk" ? "text-red-600" : "text-green-600"
              }`}
            >
              Prediction: {result}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default PredictionForm;
