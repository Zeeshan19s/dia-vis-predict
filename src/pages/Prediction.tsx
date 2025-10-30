import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle, AlertTriangle } from 'lucide-react';

interface PredictionFormData {
  pregnancies: string;
  glucose: string;
  bloodPressure: string;
  skinThickness: string;
  insulin: string;
  bmi: string;
  diabetesPedigree: string;
  age: string;
}

const Prediction = () => {
  const [formData, setFormData] = useState<PredictionFormData>({
    pregnancies: '1',
    glucose: '120',
    bloodPressure: '70',
    skinThickness: '20',
    insulin: '80',
    bmi: '25.0',
    diabetesPedigree: '0.5',
    age: '30',
  });

  const [prediction, setPrediction] = useState<{ risk: string; color: string; icon: any } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const predictRisk = () => {
    const glucose = Number(formData.glucose);
    const bmi = Number(formData.bmi);

    let risk = '';
    let color = '';
    let icon = null;

    if (glucose > 120 && bmi > 30) {
      risk = 'High Risk';
      color = 'destructive';
      icon = AlertCircle;
    } else if (glucose > 100 && bmi > 25) {
      risk = 'Medium Risk';
      color = 'warning';
      icon = AlertTriangle;
    } else {
      risk = 'Low Risk';
      color = 'success';
      icon = CheckCircle;
    }

    setPrediction({ risk, color, icon });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    predictRisk();
  };

  const resetForm = () => {
    setFormData({
      pregnancies: '',
      glucose: '',
      bloodPressure: '',
      skinThickness: '',
      insulin: '',
      bmi: '',
      diabetesPedigree: '',
      age: '',
    });
    setPrediction(null);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Diabetes Risk Prediction</h1>
        <p className="text-muted-foreground">
          Enter patient data to assess diabetes risk level
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Patient Information</CardTitle>
            <CardDescription>Fill in all fields to get a risk assessment</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pregnancies">Pregnancies</Label>
                  <Input
                    id="pregnancies"
                    name="pregnancies"
                    type="number"
                    min="0"
                    value={formData.pregnancies}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="glucose">Glucose (mg/dL)</Label>
                  <Input
                    id="glucose"
                    name="glucose"
                    type="number"
                    min="0"
                    value={formData.glucose}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bloodPressure">Blood Pressure (mm Hg)</Label>
                  <Input
                    id="bloodPressure"
                    name="bloodPressure"
                    type="number"
                    min="0"
                    value={formData.bloodPressure}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="skinThickness">Skin Thickness (mm)</Label>
                  <Input
                    id="skinThickness"
                    name="skinThickness"
                    type="number"
                    min="0"
                    value={formData.skinThickness}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="insulin">Insulin (μU/mL)</Label>
                  <Input
                    id="insulin"
                    name="insulin"
                    type="number"
                    min="0"
                    value={formData.insulin}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bmi">BMI</Label>
                  <Input
                    id="bmi"
                    name="bmi"
                    type="number"
                    step="0.1"
                    min="0"
                    value={formData.bmi}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="diabetesPedigree">Diabetes Pedigree Function</Label>
                  <Input
                    id="diabetesPedigree"
                    name="diabetesPedigree"
                    type="number"
                    step="0.001"
                    min="0"
                    value={formData.diabetesPedigree}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age">Age (years)</Label>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    min="0"
                    value={formData.age}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button type="submit" className="flex-1">
                  Predict Risk
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  Reset
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {prediction && (
          <Card className={`shadow-card animate-slide-up border-2 border-${prediction.color}`}>
            <CardHeader>
              <CardTitle>Prediction Result</CardTitle>
              <CardDescription>Based on the provided patient data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className={`flex flex-col items-center justify-center p-8 rounded-xl bg-${prediction.color}/10`}>
                {prediction.icon && (
                  <prediction.icon className={`h-16 w-16 text-${prediction.color} mb-4`} />
                )}
                <h2 className={`text-3xl font-bold text-${prediction.color}`}>
                  {prediction.risk}
                </h2>
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Risk Factors Analysis</h3>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Glucose Level</span>
                    <span className="text-sm">{formData.glucose} mg/dL</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">BMI</span>
                    <span className="text-sm">{formData.bmi}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                    <span className="text-sm font-medium">Age</span>
                    <span className="text-sm">{formData.age} years</span>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg bg-${prediction.color}/10 border border-${prediction.color}/20`}>
                <h3 className="font-semibold mb-2">Recommendation</h3>
                <p className="text-sm">
                  {prediction.risk === 'High Risk' && 
                    'Immediate consultation with a healthcare provider is recommended. Consider lifestyle changes and medical intervention.'}
                  {prediction.risk === 'Medium Risk' && 
                    'Monitor glucose levels regularly. Adopt a healthy diet and exercise routine. Schedule a checkup with your doctor.'}
                  {prediction.risk === 'Low Risk' && 
                    'Maintain a healthy lifestyle with balanced diet and regular exercise. Continue routine health checkups.'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Prediction;
