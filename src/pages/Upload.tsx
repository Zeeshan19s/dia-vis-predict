import { useState } from 'react';
import Papa from 'papaparse';
import { useData } from '@/contexts/DataContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Upload as UploadIcon, CheckCircle, FileSpreadsheet } from 'lucide-react';
import { toast } from 'sonner';

const Upload = () => {
  const { data, columns, setData } = useData();
  const [uploading, setUploading] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.endsWith('.csv')) {
      toast.error('Please upload a CSV file');
      return;
    }

    setUploading(true);

    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => {
        const parsedData = results.data as any[];
        const cols = results.meta.fields || [];
        
        setData(parsedData, cols);
        setUploading(false);
        toast.success('Dataset loaded successfully!');
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
        toast.error('Error parsing CSV file');
        setUploading(false);
      },
    });
  };

  const getDataSummary = () => {
    if (data.length === 0) return null;

    const summary: { [key: string]: { missing: number; mean?: number; min?: number; max?: number } } = {};

    columns.forEach((col) => {
      const values = data.map((row) => row[col]).filter((val) => val !== null && val !== undefined && val !== '');
      const numericValues = values.filter((val) => typeof val === 'number') as number[];
      
      summary[col] = {
        missing: data.length - values.length,
      };

      if (numericValues.length > 0) {
        const sum = numericValues.reduce((a, b) => a + b, 0);
        summary[col].mean = sum / numericValues.length;
        summary[col].min = Math.min(...numericValues);
        summary[col].max = Math.max(...numericValues);
      }
    });

    return summary;
  };

  const summary = getDataSummary();

  return (
    <div className="animate-fade-in space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Dataset Upload & Insights</h1>
        <p className="text-muted-foreground">
          Upload your diabetes dataset CSV file to begin analysis
        </p>
      </div>

      {/* Upload Card */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Upload Dataset</CardTitle>
          <CardDescription>Choose a CSV file containing diabetes-related health data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 hover:border-primary transition-colors">
            <UploadIcon className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-4">Click to upload or drag and drop</p>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
              disabled={uploading}
            />
            <label htmlFor="file-upload">
              <Button variant="default" disabled={uploading} asChild>
                <span className="cursor-pointer">
                  {uploading ? 'Uploading...' : 'Choose File'}
                </span>
              </Button>
            </label>
          </div>

          {data.length > 0 && (
            <div className="mt-4 flex items-center gap-2 text-success bg-success/10 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">Dataset loaded successfully — ready for visualization</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Data Preview */}
      {data.length > 0 && (
        <>
          <Card className="shadow-card animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
                Data Preview (First 5 Rows)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      {columns.map((col) => (
                        <th key={col} className="border border-border p-2 text-left text-sm font-semibold">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {data.slice(0, 5).map((row, idx) => (
                      <tr key={idx} className="hover:bg-muted/50">
                        {columns.map((col) => (
                          <td key={col} className="border border-border p-2 text-sm">
                            {row[col]?.toString() || 'N/A'}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Data Summary */}
          {summary && (
            <Card className="shadow-card animate-slide-up">
              <CardHeader>
                <CardTitle>Data Summary</CardTitle>
                <CardDescription>
                  {data.length} rows × {columns.length} columns
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-2 text-left text-sm font-semibold">Column</th>
                        <th className="border border-border p-2 text-left text-sm font-semibold">Missing Values</th>
                        <th className="border border-border p-2 text-left text-sm font-semibold">Mean</th>
                        <th className="border border-border p-2 text-left text-sm font-semibold">Min</th>
                        <th className="border border-border p-2 text-left text-sm font-semibold">Max</th>
                      </tr>
                    </thead>
                    <tbody>
                      {columns.map((col) => (
                        <tr key={col} className="hover:bg-muted/50">
                          <td className="border border-border p-2 text-sm font-medium">{col}</td>
                          <td className="border border-border p-2 text-sm">{summary[col].missing}</td>
                          <td className="border border-border p-2 text-sm">
                            {summary[col].mean !== undefined ? summary[col].mean!.toFixed(2) : 'N/A'}
                          </td>
                          <td className="border border-border p-2 text-sm">
                            {summary[col].min !== undefined ? summary[col].min!.toFixed(2) : 'N/A'}
                          </td>
                          <td className="border border-border p-2 text-sm">
                            {summary[col].max !== undefined ? summary[col].max!.toFixed(2) : 'N/A'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </div>
  );
};

export default Upload;
